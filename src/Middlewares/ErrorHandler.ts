import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error.message === 'Car not found') {
      res.status(404).json({ message: error.message });
    } 
    next();
  }
}

export default ErrorHandler;