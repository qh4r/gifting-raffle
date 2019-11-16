import * as express from "express";
import { CommandBus } from "../../../shared/command-bus";

import { listAction, listActionValidation } from "./actions/list.action";
import { createAction, createActionValidation } from "./actions/create.action";
import { joinAction, joinActionValidation } from "./actions/join.action";
import { endAction, endActionValidation } from "./actions/end.action";
import { detailsAction, detailsActionValidation } from "./actions/details.action";
// COMMAND_IMPORTS

export interface RafflesRoutingProps {
  commandBus: CommandBus;
};

export const rafflesRouting = ({commandBus}: RafflesRoutingProps) => {
  const router = express.Router();

  router.get('/list', [listActionValidation], listAction({commandBus}));
router.post('/create', [createActionValidation], createAction({commandBus}));
router.post('/join', [joinActionValidation], joinAction({commandBus}));
router.post('/:raffleId/end', [endActionValidation], endAction({commandBus}));
router.get('/:raffleId/details', [detailsActionValidation], detailsAction({commandBus}));
// COMMANDS_SETUP

  return router;
};
