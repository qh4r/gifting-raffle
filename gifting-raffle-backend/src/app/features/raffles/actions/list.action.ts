import {Request, Response, NextFunction} from 'express';
import { RaffleService } from "../../../services/raffle.service";

export interface ListActionProps {
  raffleService: RaffleService
}

export const listAction = ({ raffleService }: ListActionProps) => (req: Request, res: Response, next: NextFunction) => {
  raffleService.getRafflesList(res.locals.user.id)
    .then(commandResult => {
      res.json(commandResult);
    })
    .catch(next);
};
