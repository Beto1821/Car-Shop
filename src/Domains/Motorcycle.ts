import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category = 'Street' || 'Custom' || 'Trail';
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  public getCategory() {
    return this.category;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;
