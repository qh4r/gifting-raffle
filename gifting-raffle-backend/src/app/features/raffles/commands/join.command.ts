import { Command } from "../../../../shared/command-bus";
import { UserModel } from "../../users/models/user.model";

export const JOIN_COMMAND_TYPE = 'raffles/JOIN';

export interface JoinCommandPayload {
  name: string,
  raffleKey: string,
  user: UserModel,
}

export class JoinCommand implements Command<JoinCommandPayload> {
  public type: string = JOIN_COMMAND_TYPE;

  constructor(public payload: JoinCommandPayload) {}
}
