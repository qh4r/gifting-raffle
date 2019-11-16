import {Request, Response, NextFunction} from 'express';
import { celebrate, Joi } from "celebrate";
import { CommandBus } from "../../../../shared/command-bus";
import { DetailsCommand } from "../commands/details.command";

export interface DetailsActionProps {
  commandBus: CommandBus
}

export const detailsActionValidation = celebrate(
  {
    headers: Joi.object()
  },
  { abortEarly: false }
);

/**
 * @swagger
 *
 * /api/raffles/details:
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
export const detailsAction = ({commandBus}: DetailsActionProps) => (req: Request, res: Response, next: NextFunction) => {
  commandBus
    .execute(new DetailsCommand({
      // command props
    }))
    .then(commandResult => {
      // response
    })
    .catch(next);
};
