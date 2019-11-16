import * as express from "express";
import { CommandBus } from "../../../shared/command-bus";

import { loginAction, loginActionValidation } from "./actions/login.action";
import { signUpAction, signUpActionValidation } from "./actions/sign-up.action";

// COMMAND_IMPORTS

export interface UsersRoutingProps {
  commandBus: CommandBus;
}

// eslint-disable-next-line
export const usersRouting = ({ commandBus }: UsersRoutingProps) => {
  const router = express.Router();

  router.post("/login", [ loginActionValidation ], loginAction({ commandBus }));
  router.post("/sign-up", [ signUpActionValidation ], signUpAction({ commandBus }));
  // COMMANDS_SETUP

  return router;
};
