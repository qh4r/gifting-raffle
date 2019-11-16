import { Handler } from "../../../../shared/command-bus";
import { SIGN_UP_COMMAND_TYPE, SignUpCommand } from "../commands/sign-up.command";
import { AuthenticationService } from "../../../services/authentication.service";

export interface SignUpHandlerProps {
  authenticationService: AuthenticationService;
}

export default class SignUpHandler implements Handler<SignUpCommand> {
  public commandType: string = SIGN_UP_COMMAND_TYPE

  private readonly authenticationService: AuthenticationService;

  constructor({authenticationService}: SignUpHandlerProps) {
    this.authenticationService = authenticationService;
  }


  async execute(command: SignUpCommand) {
    return this.authenticationService.register(command.payload);
  };
}
