import { Request, Response } from 'express';
import CarService from '../Services/CarServices';

class CarController {
  constructor(private service = new CarService()) {}

  public create = async (req: Request, res: Response) => {
    const result = await this.service.create(req.body);

    res.status(201).json(result);
  };
}

export default new CarController();