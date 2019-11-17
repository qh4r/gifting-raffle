import { Command } from "../../../../shared/command-bus";
import { UserModel } from "../../users/models/user.model";

export const END_COMMAND_TYPE = 'raffles/END';

export interface EndCommandPayload {
  raffleId: string,
  user: UserModel,
}

export class EndCommand implements Command<EndCommandPayload> {
  public type: string = END_COMMAND_TYPE;

  constructor(public payload: EndCommandPayload) {}
}
