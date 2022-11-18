import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarServices';
import { carMock, carMockWithId, carsOutput, carList } from './mocks/carMock';

const ERROR_CAR = 'Car not found';

describe('Car Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('When creating a car', function () {
    it('Creates a new car succesfully', async function () {
      sinon.stub(Model, 'create').resolves(carMockWithId);

      const result = await CarService.create(carMock);
      expect(result).to.be.deep.equal(carMockWithId);
    });
  });

  describe('When searching all cars', function () {
    it('Return all cars succesfully', async function () {
      sinon.stub(Model, 'find').resolves(carsOutput);

      const result = await CarService.get();
      expect(result).to.be.deep.equal(carList);
    });
  });

  describe('When searching a car', function () {
    it('Fails to return a car', async function () {
      const id = '1821f8ea74092b2e6a784c51';
      sinon.stub(Model, 'findOne').resolves();

      try {
        await CarService.getById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal(ERROR_CAR);
      }
    });
  });
});
