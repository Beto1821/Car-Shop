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

  public async getById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    return this.creatCarDomain(car);
  }

  public async updateCar(id: string, car: ICar) {
    const carODM = new CarODM();
    
    const carUpdate = await carODM.update(id, car);
    return this.creatCarDomain(carUpdate);
  }
}

export default new CarService();
