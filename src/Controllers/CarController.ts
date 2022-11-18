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

    const car = await this.service.find(id);
    if (!car) {
      return next({ message: 'Car not found' });
    }
    return res.status(200).json(car);
  };
}

export default new CarController();