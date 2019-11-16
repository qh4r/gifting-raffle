import { Handler } from "../../../../shared/command-bus";
import { JOIN_COMMAND_TYPE, JoinCommand } from "../commands/join.command";

export default class JoinHandler implements Handler<JoinCommand> {
  public commandType: string = JOIN_COMMAND_TYPE

  async execute(command: JoinCommand) {
    // execute body
  };
}
