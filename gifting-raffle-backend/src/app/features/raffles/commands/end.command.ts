import { Command } from "../../../../shared/command-bus";

export const END_COMMAND_TYPE = 'raffles/END';

export interface EndCommandPayload {
}

export class EndCommand implements Command<EndCommandPayload> {
  public type: string = END_COMMAND_TYPE;

  constructor(public payload: EndCommandPayload) {}
}
