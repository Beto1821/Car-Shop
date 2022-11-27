import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../../src/Domains/Motorcycle';

const motorcycleMock: IMotorcycle = {
  model: 'Honda Cb',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleMockWithId: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorsOutput: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export const motorDomain: Motorcycle = new Motorcycle(motorsOutput[0]);

export const otherMotorDomain: Motorcycle = new Motorcycle(motorsOutput[1]);

export const motorList: Motorcycle[] = [
  motorDomain,
  otherMotorDomain,
];

export {
  motorcycleMock,
  motorcycleMockWithId,
  motorsOutput,
};
