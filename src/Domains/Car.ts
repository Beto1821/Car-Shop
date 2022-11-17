import ICar from '../Interfaces/ICar';

class Car {
  private _id: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean | undefined;
  private _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(
    car: ICar,
  ) {
    this._id = car.id;
    this._model = car.model;
    this._year = car.year;
    this._color = car.color;
    this._status = car.status || false;
    this._buyValue = car.buyValue;
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
  }

  public get id(): string | undefined {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  public get model(): string {
    return this._model;
  }
  public set model(value: string) {
    this._model = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }

  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }
  
  public get status(): boolean | undefined {
    return this._status;
  }
  public set status(value: boolean | undefined) {
    this._status = value;
  } 
  
  public get buyValue(): number {
    return this._buyValue;
  }
  public set buyValue(value: number) {
    this._buyValue = value;
  }
  
  public get doorsQty(): number {
    return this._doorsQty;
  }
  public set doorsQty(value: number) {
    this._doorsQty = value;
  }
  
  public get seatsQty(): number {
    return this._seatsQty;
  }
  public set seatsQty(value: number) {
    this._seatsQty = value;
  }  
}

export default Car;