import {Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from "celebrate";
import { CommandBus } from "../../../../shared/command-bus";
import { JoinCommand } from "../commands/join.command";

export interface JoinActionProps {
  commandBus: CommandBus
}

export const joinActionValidation = celebrate(
  {
    headers: Joi.object()
  },
  { abortEarly: false }
);

/**
 * @swagger
 *
 * /api/raffles/join:
 *   post:
 *     description: desc
 *     responses:
 *       201:
 *         description: desc
 *       400:
 *         description: Validation Error
 *       500:
 *         description: Internal Server Error
 */
export const joinAction = ({commandBus}: JoinActionProps) => (req: Request, res: Response, next: NextFunction) => {
  commandBus
    .execute(new JoinCommand({
      // command props
    }))
    .then(commandResult => {
      // response
    })
    .catch(next);
};
