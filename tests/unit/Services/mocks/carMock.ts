import ICar from '../../../../src/Interfaces/ICar';
import Car from '../../../../src/Domains/Car';

const carMock: ICar = {
  model: 'Parati',
  year: 2003,
  color: 'Black',
  status: true,
  buyValue: 11.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carMockWithId: ICar = {
  id: '1821f8ea74092b2e6a784c51',
  model: 'Parati',
  year: 2003,
  color: 'Black',
  status: true,
  buyValue: 11.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carsOutput: ICar[] = [
  {
    id: '1821f8ea74092b2e6a784c51',
    model: 'Parati',
    year: 2003,
    color: 'Black',
    status: true,
    buyValue: 11.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Fuca',
    year: 1975,
    color: 'White',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const carDomain: Car = new Car(carsOutput[0]);

export const otherCarDomain: Car = new Car(carsOutput[1]);

export const carList: Car[] = [
  carDomain,
  otherCarDomain,
];

export {
  carMock,
  carMockWithId,
  carsOutput,
};
