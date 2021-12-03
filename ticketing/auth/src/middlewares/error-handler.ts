import { Request, Response, NextFunction } from "express";
// import { RequestValidationError } from "../errors/request-validation-error";
// import { DatabaseConnectionError } from "../errors/database-connection-error";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if (err instanceof RequestValidationError) {
  //   // console.log("handling this error as a request validation error");

  //   return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  // }

  // if (err instanceof DatabaseConnectionError) {
  //   console.log("handling error connecting to database");
  //   return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  // }

  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [
      {
        message: "Something went wrong",
      },
    ],
  });
};