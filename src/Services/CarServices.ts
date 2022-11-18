import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private creatCarDomain(car: ICar | null): Car | null | undefined {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const cars = await carODM.create(car);
    return this.creatCarDomain(cars);
  }

  public async get() {
    const carODM = new CarODM();
    const cars = await carODM.get();
    return cars.map(this.creatCarDomain);
  }

  public async find(id: string) {
    const carODM = new CarODM();
    const car = await carODM.find(id);
    if (!car) {
      throw new Error('Car not found');
    }
    return this.creatCarDomain(car);
  }
}

export default new CarService();
