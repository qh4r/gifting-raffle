import { Handler } from "../../../../shared/command-bus";
import { END_COMMAND_TYPE, EndCommand } from "../commands/end.command";

export default class EndHandler implements Handler<EndCommand> {
  public commandType: string = END_COMMAND_TYPE

  async execute(command: EndCommand) {
    // execute body
  };
}
