import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/CarServices';

class CarController {
  constructor(private service = CarService) {}

  public create = async (req: Request, res: Response) => {
    const result = await this.service.create(req.body);

    res.status(201).json(result);
  };

  public get = async (req: Request, res: Response) => {
    const result = await this.service.get();

    res.status(200).json(result);
  };

  public find = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const result = await this.service.find(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default new CarController();