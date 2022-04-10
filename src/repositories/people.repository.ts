import { v4 } from 'uuid';
import { IPeople } from '../interface';

export default class PeopleRepository {
  _db: any;

  constructor({ configs }: any) {
    this._db = configs.dynamondb;
  }
  
  public async getAllPeople() {
    try {
      const data = await this._db.scan({ TableName: 'PeopleTable' }).promise();

      return {
        status: 200,
        body: {
          data: data.Items,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        status: 400,
        body: error,
      };
    }
  }

  public async createPeople(entity: IPeople) {
    try {
      const dbEntity = {
        id: v4(),
        nombre: entity.name,
        altura: entity.height,
        masa: entity.mass,
        color_pelo: entity.hair_color,
        color_piel: entity.skin_color,
        color_ojo: entity.eye_color,
        aniversario: entity.birth_year,
        tipo: entity.gender,
        fecha_fundado: new Date().toISOString(),
      };

      await this._db
        .put({
          TableName: 'PeopleTable',
          Item: dbEntity,
        })
        .promise();

      return {
        status: 201,
        body: {
          data: { newId: dbEntity.id },
        },
      };
    } catch (error) {
      console.error(error);
      return {
        status: 400,
        body: error,
      };
    }
  }
}
