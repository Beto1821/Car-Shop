import Moto from '../Domains/Motorcycle';
import IMoto from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotoODM';

class MotoService {
  private creatMotoDomain(moto: IMoto | null): Moto | null | undefined {
    if (moto) {
      return new Moto(moto);
    }
    return null;
  }

  public async create(moto: IMoto) {
    const motoODM = new MotoODM();
    const motos = await motoODM.create(moto);
    return this.creatMotoDomain(motos);
  }

  public async get() {
    const motoODM = new MotoODM();
    const motos = await motoODM.get();
    return motos.map(this.creatMotoDomain);
  }

  public async getById(id: string) {
    const motoODM = new MotoODM();
    const moto = await motoODM.getById(id);
    return this.creatMotoDomain(moto);
  }  
}

export default new MotoService();