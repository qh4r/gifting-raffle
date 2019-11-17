import {Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from "celebrate";
import { CommandBus } from "../../../../shared/command-bus";
import { CreateCommand } from "../commands/create.command";
import { CREATED } from "http-status-codes";

export interface CreateActionProps {
  commandBus: CommandBus
}

export const createActionValidation = celebrate(
  {
    body: Joi.object().keys({
      name: Joi.string().required(),
    }),
  },
  { abortEarly: false }
);

export const createAction = ({commandBus}: CreateActionProps) => (req: Request, res: Response, next: NextFunction) => {
  commandBus
    .execute(new CreateCommand({
      user: res.locals.user,
      name: req.body.name,
    }))
    .then(commandResult => {
      return res.status(CREATED).json({
        ruffleId: commandResult,
      })
    })
    .catch(next);
};
