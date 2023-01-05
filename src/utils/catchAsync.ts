import { Request, Response } from 'express';

const catchAsync = (fn: any) => (req: Request, res: Response) => {
  Promise.resolve(fn(req, res)).catch((err) => res.send(err));
};

export default catchAsync;
