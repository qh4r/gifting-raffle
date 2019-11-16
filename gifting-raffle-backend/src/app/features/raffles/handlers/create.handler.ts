import { Handler } from "../../../../shared/command-bus";
import { CREATE_COMMAND_TYPE, CreateCommand } from "../commands/create.command";

export default class CreateHandler implements Handler<CreateCommand> {
  public commandType: string = CREATE_COMMAND_TYPE

  async execute(command: CreateCommand) {
    // execute body
  };
}
