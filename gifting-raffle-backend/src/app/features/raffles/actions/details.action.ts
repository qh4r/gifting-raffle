import { Request, Response, NextFunction } from "express";
import { celebrate, Joi } from "celebrate";
import { RaffleService } from "../../../services/raffle.service";

export interface DetailsActionProps {
  raffleService: RaffleService
}

export const detailsActionValidation = celebrate(
  {
    params: Joi.object().keys({
      raffleId: Joi.string().required(),
    }),
  },
  { abortEarly: false },
);

export const detailsAction = ({ raffleService }: DetailsActionProps) => (req: Request, res: Response,
  next: NextFunction) => {
  raffleService.getRafflesDetails(req.params.raffleId, res.locals.user.id)
               .then(commandResult => {
                 res.json(commandResult);
               })
               .catch(next);
};
