import { Handler } from "../../../../shared/command-bus";
import { JOIN_COMMAND_TYPE, JoinCommand } from "../commands/join.command";
import { RaffleService } from "../../../services/raffle.service";

export interface JoinHandlerProps {
  raffleService: RaffleService;
}

export default class JoinHandler implements Handler<JoinCommand> {
  public commandType: string = JOIN_COMMAND_TYPE;
  private readonly raffleService: RaffleService;

  constructor({ raffleService }: JoinHandlerProps) {
    this.raffleService = raffleService;
  }
  async execute(command: JoinCommand) {
    return this.raffleService.joinRaffle(command.payload);
  };
}
