"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({});
exports.default = {
    database_url: process.env.DATABASE_URL,
    port: Number(process.env.PORT),
    env: process.env.NODE_ENV ? "development" : "production",
    jwt: {
        verification_secret: process.env.JWT_VERIFICATION_SECRET,
        verification_expiration_time: process.env
            .JWT_VERIFICATION_EXPIRATION_TIME,
        access_secret: process.env.JWT_ACCESS_SECRET,
        access_expiration_time: process.env.JWT_ACCESS_EXPIRATION_TIME,
        refresh_secret: process.env.JWT_REFRESH_SECRET,
        refresh_expiration_time: process.env.JWT_REFRESH_EXPIRATION_TIME,
        reset_password_secret: process.env.JWT_FORGET_PASSWORD_SECRET,
        reset_password_expiration_time: process.env
            .JWT_FORGET_PASSWORD_EXPIRATION_TIME,
    },
    nodemailer: {
        email: process.env.GOOGLE_EMAIL,
        google_app_password: "zgga zooc ajgq fdvr",
    },
    salt: 10,
};
