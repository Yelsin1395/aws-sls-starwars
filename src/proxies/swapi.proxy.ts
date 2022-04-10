import { getAxios } from './provider.proxy';

export default class SwapiProxy {
  axios: any;

  constructor() {
    this.axios = getAxios({ baseUrl: 'https://swapi.py4e.com/api' });
  }

  async getAllSwapiPeoples() {
    const { data } = await this.axios.get('/people');    
    return data.results;
  }
}
