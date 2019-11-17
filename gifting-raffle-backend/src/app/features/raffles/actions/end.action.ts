import {Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from "celebrate";
import { CommandBus } from "../../../../shared/command-bus";
import { EndCommand } from "../commands/end.command";
import { ACCEPTED } from "http-status-codes";

export interface EndActionProps {
  commandBus: CommandBus
}

export const endActionValidation = celebrate(
  {
    params: {
      raffleId: Joi.string().required(),
    }
  },
  { abortEarly: false }
);

export const endAction = ({commandBus}: EndActionProps) => (req: Request, res: Response, next: NextFunction) => {
  commandBus
    .execute(new EndCommand({
      raffleId: req.params.raffleId,
      user: res.locals.user,
    }))
    .then(() => {
      return res.status(ACCEPTED).send();
    })
    .catch(next);
};
