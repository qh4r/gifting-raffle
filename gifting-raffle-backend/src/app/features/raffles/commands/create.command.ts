import { Command } from "../../../../shared/command-bus";

export const CREATE_COMMAND_TYPE = 'raffles/CREATE';

export interface CreateCommandPayload {
}

export class CreateCommand implements Command<CreateCommandPayload> {
  public type: string = CREATE_COMMAND_TYPE;

  constructor(public payload: CreateCommandPayload) {}
}
