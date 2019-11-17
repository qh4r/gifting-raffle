import {Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from "celebrate";
import { CommandBus } from "../../../../shared/command-bus";
import { JoinCommand } from "../commands/join.command";
import { ACCEPTED } from "http-status-codes";

export interface JoinActionProps {
  commandBus: CommandBus
}

export const joinActionValidation = celebrate(
  {
    body: Joi.object().keys({
      raffleKey: Joi.string().required(),
    }),
  },
  { abortEarly: false }
);

export const joinAction = ({commandBus}: JoinActionProps) => (req: Request, res: Response, next: NextFunction) => {
  commandBus
    .execute(new JoinCommand({
      user: res.locals.user,
      raffleKey: req.body.raffleKey,
    }))
    .then(commandResult => {
      res.status(ACCEPTED).json({
        raffleId: commandResult,
      })
    })
    .catch(next);
};
