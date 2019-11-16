import {Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from "celebrate";
import { CommandBus } from "../../../../shared/command-bus";
import { EndCommand } from "../commands/end.command";

export interface EndActionProps {
  commandBus: CommandBus
}

export const endActionValidation = celebrate(
  {
    headers: Joi.object()
  },
  { abortEarly: false }
);

/**
 * @swagger
 *
 * /api/raffles/end:
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
export const endAction = ({commandBus}: EndActionProps) => (req: Request, res: Response, next: NextFunction) => {
  commandBus
    .execute(new EndCommand({
      // command props
    }))
    .then(commandResult => {
      // response
    })
    .catch(next);
};
