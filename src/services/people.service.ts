import { translateKey } from '../common';

export default class PeopleService {
  _peopleRepository: any;
  _SwapiProxy: any;

  constructor({ PeopleRepository, SwapiProxy }: any) {
    this._peopleRepository = PeopleRepository;
    this._SwapiProxy = SwapiProxy;
  }

  private _normalizeData(data: any[]) {
    const newArray = [];
    for (const item of data) {
      let newObject: any = {};

      for (const key of Object.keys(item)) {
        const value = item[key];
        const newKey = translateKey(key);
        if (newKey) {
          newObject[newKey] = value;
        }
      }
      newArray.push(newObject);
    }

    return newArray;
  }

  public async getAllPeopleBySwapi() {
    const result = await this._SwapiProxy.getAllSwapiPeoples();

    const data = this._normalizeData(result);
    return {
      status: 200,
      body: { data },
    };
  }

  public async getAllPeople() {
    return this._peopleRepository.getAllPeople();
  }

  public async createPeople(entity: any) {
    return this._peopleRepository.createPeople(entity);
  }
}
