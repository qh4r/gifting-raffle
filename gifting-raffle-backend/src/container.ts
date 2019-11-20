import * as awilix from "awilix";
import * as http from "http";
import { config as dotenvConfig } from "dotenv-safe";
import { AwilixContainer, Lifetime } from "awilix";
import { Application } from "express";
import { makeApiConfig } from "../config/services";
import { CommandBus } from "./shared/command-bus";
import { createRouter } from "./app/router";
import { winstonLogger } from "./shared/logger";
import { errorHandler } from "./middleware/error-handler";
import { createApp } from "./app/app";
import { UserModel } from "./app/features/users/models/user.model";
import { RaffleModel } from "./app/features/raffles/models/raffle.model";
import { PairModel } from "./app/features/raffles/models/pair.model";
// MODELS_IMPORTS
import { usersRouting } from "./app/features/users/routing";
import { rafflesRouting } from "./app/features/raffles/routing";
import { AuthenticationService } from "./app/services/authentication.service";
import { createConnection } from "typeorm";
import { authenticationMiddlewareFactory } from "./middleware/authentication.middleware";
import { RaffleService } from "./app/services/raffle.service";
import { MailingService } from "./app/services/mailing.service";
import { loggers } from "winston";
// ROUTING_IMPORTS

dotenvConfig({
  example: ".env.dist",
});

const dbConfig = require("../config/db")(process.env);

const config = makeApiConfig(process.env);

const HANDLER_REGEX = /.+Handler$/;

export async function createContainer(): Promise<AwilixContainer> {
  const container: AwilixContainer = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  });

  container.register({
    port: awilix.asValue(config.port),
    accessTokenKey: awilix.asValue(config.accessTokenKey),
    gmailAddress: awilix.asValue(config.gmailAddress),
    gmailPassword: awilix.asValue(config.gmailPassword),
    logger: awilix.asValue(winstonLogger),
  });

  const dbConnection = await createConnection({
    ...dbConfig,
  });

  await dbConnection.runMigrations();

  container.register({
    usersRepository: awilix.asValue(dbConnection.getRepository(UserModel)),
    rafflesRepository: awilix.asValue(dbConnection.getRepository(RaffleModel)),
    pairsRepository: awilix.asValue(dbConnection.getRepository(PairModel)),
    // MODELS_SETUP
  });

  container.register({
    authenticationService: awilix.asClass(AuthenticationService),
    raffleService: awilix.asClass(RaffleService),
    mailingService: awilix.asClass(MailingService),
  });

  container.register({
    authenticationMiddleware: awilix.asFunction(authenticationMiddlewareFactory),
  });

  const handlersScope = container.createScope();

  handlersScope.loadModules([ "src/**/*.handler.ts", "src/**/*.handler.js" ], {
    formatName: "camelCase",
    resolverOptions: {
      lifetime: Lifetime.SCOPED,
      register: awilix.asClass,
    },
  });

  const handlers = Object.keys(handlersScope.registrations)
                         .filter(key => key.match(HANDLER_REGEX))
                         .map(key => handlersScope.resolve(key));

  container.register({
    handlers: awilix.asValue(handlers),
  });

  container.register({
    usersRouting: awilix.asFunction(usersRouting),
    rafflesRouting: awilix.asFunction(rafflesRouting),
    // ROUTING_SETUP
  });

  container.register({
    errorHandler: awilix.asFunction(errorHandler),
    router: awilix.asFunction(createRouter),
    commandBus: awilix.asClass(CommandBus).classic().singleton(),
  });

  container.register({
    app: awilix.asFunction(createApp).singleton(),
  });

  const app: Application = container.resolve("app");

  container.register({
    server: awilix.asValue(http.createServer(app)),
  });

  return container;
}
