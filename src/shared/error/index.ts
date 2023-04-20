import { Handler, NextFunction, Request, Response } from 'express';

export class HttpError extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);

    this.message = message;
    this.statusCode = statusCode;
  }
}
