import { Command } from "../../../../shared/command-bus";

export const JOIN_COMMAND_TYPE = 'raffles/JOIN';

export interface JoinCommandPayload {
}

export class JoinCommand implements Command<JoinCommandPayload> {
  public type: string = JOIN_COMMAND_TYPE;

  constructor(public payload: JoinCommandPayload) {}
}
