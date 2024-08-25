import Express, { Response as ExResponse, Request as ExRequest, NextFunction } from "express";
import { ValidateError } from "tsoa";

function globalErrorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
};

export const UseGlobalErrorHandler = (app: Express.Application) => app.use(globalErrorHandler);
