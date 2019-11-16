import {Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from "celebrate";
import { CommandBus } from "../../../../shared/command-bus";
import { ListCommand } from "../commands/list.command";

export interface ListActionProps {
  commandBus: CommandBus
}

export const listActionValidation = celebrate(
  {
    headers: Joi.object()
  },
  { abortEarly: false }
);

/**
 * @swagger
 *
 * /api/raffles/list:
 *   get:
 *     description: desc
 *     responses:
 *       201:
 *         description: desc
 *       400:
 *         description: Validation Error
 *       500:
 *         description: Internal Server Error
 */
export const listAction = ({commandBus}: ListActionProps) => (req: Request, res: Response, next: NextFunction) => {
  commandBus
    .execute(new ListCommand({
      // command props
    }))
    .then(commandResult => {
      // response
    })
    .catch(next);
};
