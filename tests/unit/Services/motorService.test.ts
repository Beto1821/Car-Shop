import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotoServices';
import {
  motorcycleMock,
  motorcycleMockWithId,
  motorsOutput,
  motorList,
} from './mocks/motorcycleMock';

const ERROR_MOTOR = 'Motorcycle not found';

describe('Motor Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('When creating a motorcycle', function () {
    it('Creates a new motorcycle succesfully', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleMockWithId);

      const result = await MotorcycleService.create(motorcycleMock);
      expect(result).to.be.deep.equal(motorcycleMockWithId);
    });
  });

  describe('When searching all motorcycles', function () {
    it('Return all motorcycles succesfully', async function () {
      sinon.stub(Model, 'find').resolves(motorsOutput);

      const result = await MotorcycleService.get();
      expect(result).to.be.deep.equal(motorList);
    });
  });

  describe('When searching a car', function () {
    it('Fails to return a car', async function () {
      const id = '6348513f34c397abcad040b2';
      sinon.stub(Model, 'findOne').resolves();

      try {
        await MotorcycleService.getById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal(ERROR_MOTOR);
      }
    });
  });
});