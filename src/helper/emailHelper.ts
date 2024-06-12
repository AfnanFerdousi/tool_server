import nodemailer from "nodemailer";
import config from "../config";

class Email {
  transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "s.oguzhankocc@gmail.com",
      pass: "tbog jpot xoox tboh",
    },
  });
  async sendEmail(from: string, to: string, subject: string, text: string) {
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: text,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  }
}

export const EmailHelper = new Email();
