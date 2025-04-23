import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import HttpStatus from "http-status";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Bike Service server is running ....",
  });
});

app.use("/api", router);

app.use(globalErrorHandler);

app.use((req: Request, res: Response) => {
  res.status(HttpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND",
    error: {
      path: req.originalUrl,
      message: "API NOT FOUND",
    },
  });
});

export default app;
