import { NextFunction, Request, Response } from 'express';

const ValidId = async (req: Request, res: Response, next: NextFunction) => {
  const regex = /^[a-f\d]{24}$/i;
  const validate = regex.test(req.params.id);
    
  if (!validate) {
    return res.status(422).json({ message: 'Invalid mongo id' });
  }
  next();
};
export default ValidId;
