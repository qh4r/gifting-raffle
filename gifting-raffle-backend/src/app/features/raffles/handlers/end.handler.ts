import { Handler } from "../../../../shared/command-bus";
import { END_COMMAND_TYPE, EndCommand } from "../commands/end.command";
import { RaffleService } from "../../../services/raffle.service";

export interface EndHandlerProps {
  raffleService: RaffleService;
}

export default class EndHandler implements Handler<EndCommand> {
  public commandType: string = END_COMMAND_TYPE;

  private readonly raffleService: RaffleService;

  constructor({ raffleService }: EndHandlerProps) {
    this.raffleService = raffleService;
  }

  async execute(command: EndCommand) {
    return this.raffleService.endRaffle(command.payload.raffleId, command.payload.user);
  };
}
