import dotenv from "dotenv";
dotenv.config({});

export default {
  database_url: process.env.DATABASE_URL,
  port: Number(process.env.PORT),
  env: process.env.NODE_ENV ? "development" : "production",
};
