import { Command } from "../../../../shared/command-bus";
import { UserModel } from "../../users/models/user.model";

export const CREATE_COMMAND_TYPE = 'raffles/CREATE';

export interface CreateCommandPayload {
  user: UserModel,
  name: string,
}

export class CreateCommand implements Command<CreateCommandPayload> {
  public type: string = CREATE_COMMAND_TYPE;

  constructor(public payload: CreateCommandPayload) {}
}
