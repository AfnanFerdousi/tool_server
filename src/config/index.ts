import dotenv from "dotenv";
dotenv.config({});

export default {
  database_url: process.env.DATABASE_URL,
  port: Number(process.env.PORT),
  env: process.env.NODE_ENV ? "development" : "production",
  jwt: {
    verification_secret: process.env.JWT_VERIFICATION_SECRET as string,
    verification_expiration_time: process.env
      .JWT_VERIFICATION_EXPIRATION_TIME as string,
    access_secret: process.env.JWT_ACCESS_SECRET as string,
    access_expiration_time: process.env.JWT_ACCESS_EXPIRATION_TIME as string,
    refresh_secret: process.env.JWT_REFRESH_SECRET as string,
    refresh_expiration_time: process.env.JWT_REFRESH_EXPIRATION_TIME as string,
    reset_password_secret: process.env.JWT_FORGET_PASSWORD_SECRET as string,
    reset_password_expiration_time: process.env
      .JWT_FORGET_PASSWORD_EXPIRATION_TIME as string,
  },
  nodemailer: {
    email: process.env.GOOGLE_EMAIL,
    google_app_password: "zgga zooc ajgq fdvr",
  },
  salt: 10,
};
