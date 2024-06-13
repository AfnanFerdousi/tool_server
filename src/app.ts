import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import router from "./app/routes";

const app: Application = express();

const corsOptions:any = {
  origin: function(origin: string, callback: any) {
    callback(null, true);
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // enable CORS with credentials
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "This is Tool showcase",
    statusCode: httpStatus.OK,
  });
});

app.use("/api/v1", router);

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

export default app;
