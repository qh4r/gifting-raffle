import * as nodemailer from "nodemailer";
import {Transporter} from "nodemailer";

export interface MailingServiceProps {
  clientId: string;
  clientSecret: string;
  gmailAddress: string;
  gmailPassword: string;
}

export class MailingService {
  private readonly gmailAddress: string;
  private readonly transporter: Transporter;

  constructor({ gmailPassword, gmailAddress }: MailingServiceProps) {
    this.gmailAddress = gmailAddress;
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailAddress,
        pass: gmailPassword
      },
    } as any)
  }

  async sendMail(to: string, subject: string, text: string) {
    if(this.gmailAddress) {
      return this.transporter.sendMail({
        from: this.gmailAddress,
        to,
        subject,
        text,
      })
    }
  }
}
