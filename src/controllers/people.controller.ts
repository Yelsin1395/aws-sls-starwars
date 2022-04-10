import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

let _peopleService: any = null;

export default class PeopleController {
  constructor({ PeopleService }: any) {
    _peopleService = PeopleService;
  }

  public async getAllPeopleBySwapi(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    return await _peopleService.getAllPeopleBySwapi();
  }

  public async getAllPeople(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    return await _peopleService.getAllPeople();
  }

  public async createPeople(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    const entity = event.body;
    return await _peopleService.createPeople(entity);
  }
}
