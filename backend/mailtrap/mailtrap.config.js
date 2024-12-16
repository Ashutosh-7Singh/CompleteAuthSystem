import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = "2eaa7d87247d2c0f52567edbc808c035";

export const mailtrapClient = new MailtrapClient({
  // token: process.env.MAILTRAP_TOKEN,
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
