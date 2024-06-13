/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app"; 
import config from "./config/index";

process.on("uncaughtException", error => {
    console.log(error);  
    process.exit(1);
});

let server: Server | undefined;

async function bootstrap() {
  try {
        console.log(config.database_url, config, config.port)
        await mongoose.connect(config.database_url as string);
        console.log(`🛢   Database has been connected successfully`);

        server = app.listen(config.port, () => {
            console.log(`Application  listening on port ${config.port}`);
        });
    } catch (err) {
        console.log("Failed to connect database", err);
    }

    process.on("unhandledRejection", error => {
        if (server) {
            server.close(() => {
                console.log(error);
                process.exit(1);
            });
        } else {
            process.exit(1);
        }
    });
}

bootstrap();

export default server;