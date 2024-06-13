import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import config from "./config";
import mongoose from "mongoose";

const app: Application = express();

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://tool-client-zeta.vercel.app',
    '*'
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
// asdasdas hellooooo
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "This is tool backend",
    statusCode: httpStatus.OK,
  });
});

app.use("/api/v1", router);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
    statusCode: httpStatus.NOT_FOUND,
  });
  next();
});

app.listen(config.port, async () => {
  await mongoose.connect(config.database_url as string);
  console.log(`🛢   Database has been connected successfully`);
  console.log(`Application  listening on port ${config.port}`);
});

export default app;