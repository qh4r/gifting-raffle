import {Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from "celebrate";
import { CommandBus } from "../../../../shared/command-bus";
import { CreateCommand } from "../commands/create.command";

export interface CreateActionProps {
  commandBus: CommandBus
}

export const createActionValidation = celebrate(
  {
    headers: Joi.object()
  },
  { abortEarly: false }
);

/**
 * @swagger
 *
 * /api/raffles/create:
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
export const createAction = ({commandBus}: CreateActionProps) => (req: Request, res: Response, next: NextFunction) => {
  commandBus
    .execute(new CreateCommand({
      // command props
    }))
    .then(commandResult => {
      // response
    })
    .catch(next);
};
