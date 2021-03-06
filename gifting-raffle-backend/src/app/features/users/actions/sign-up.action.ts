import {Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from "celebrate";
import { CommandBus } from "../../../../shared/command-bus";
import { SignUpCommand } from "../commands/sign-up.command";
import { CREATED } from "http-status-codes";

export interface SignUpActionProps {
  commandBus: CommandBus
}

export const signUpActionValidation = celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required(),
      name: Joi.string().required(),
      password: Joi.string().required(),
      repeatPassword: Joi.string().required(),
    }),
  },
  { abortEarly: false }
);

export const signUpAction = ({commandBus}: SignUpActionProps) => (req: Request, res: Response, next: NextFunction) => {
  commandBus
    .execute(new SignUpCommand({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      repeatPassword: req.body.repeatPassword,
    }))
    .then(commandResult => {
      res.status(CREATED).json({
        accessToken: commandResult
      })
    })
    .catch(next);
};
