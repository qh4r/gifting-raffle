import { Handler } from "../../../../shared/command-bus";
import { CREATE_COMMAND_TYPE, CreateCommand } from "../commands/create.command";
import { RaffleService } from "../../../services/raffle.service";

export interface CreateHandlerProps {
  raffleService: RaffleService;
}

export default class CreateHandler implements Handler<CreateCommand> {
  public commandType: string = CREATE_COMMAND_TYPE;

  private readonly raffleService: RaffleService;

  constructor({ raffleService }: CreateHandlerProps) {
    this.raffleService = raffleService;
  }


  async execute(command: CreateCommand) {
    return this.raffleService.createRaffle(command.payload.name, command.payload.user);
  };
}
