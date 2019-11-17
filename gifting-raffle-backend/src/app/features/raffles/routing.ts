import * as express from "express";
import { CommandBus } from "../../../shared/command-bus";

import { listAction } from "./actions/list.action";
import { createAction, createActionValidation } from "./actions/create.action";
import { joinAction, joinActionValidation } from "./actions/join.action";
import { endAction, endActionValidation } from "./actions/end.action";
import { detailsAction, detailsActionValidation } from "./actions/details.action";
import { MiddlewareType } from "../../../shared/middleware-type/middleware.type";
import { RaffleService } from "../../services/raffle.service";

// COMMAND_IMPORTS

export interface RafflesRoutingProps {
  commandBus: CommandBus;
  authenticationMiddleware: MiddlewareType;
  raffleService: RaffleService;
};

export const rafflesRouting = ({ commandBus, authenticationMiddleware, raffleService }: RafflesRoutingProps) => {
  const router = express.Router();

  router.get("/list", [ authenticationMiddleware ], listAction({ raffleService }));
  router.post("/create", [ authenticationMiddleware, createActionValidation ], createAction({ commandBus }));
  router.post("/join", [ authenticationMiddleware, joinActionValidation ], joinAction({ commandBus }));
  router.post("/:raffleId/end", [ authenticationMiddleware, endActionValidation ], endAction({ commandBus }));
  router.get("/:raffleId/details", [ authenticationMiddleware, detailsActionValidation ], detailsAction({ raffleService }));
  // COMMANDS_SETUP

  return router;
};
