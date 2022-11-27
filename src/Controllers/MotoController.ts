import { Request, Response, NextFunction } from 'express';
import MotoService from '../Services/MotoServices';

class MotoController {
  constructor(private service = MotoService) {}

  public create = async (req: Request, res: Response) => {
    const result = await this.service.create(req.body);

    res.status(201).json(result);
  };

  public get = async (req: Request, res: Response) => {
    const result = await this.service.get();

    res.status(200).json(result);
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const moto = await this.service.getById(id);
    if (!moto) {
      return next({ message: 'Motorcycle not found' });
    }
    return res.status(200).json(moto);
  };  
}

export default new MotoController();