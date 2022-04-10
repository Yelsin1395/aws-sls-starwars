import { PeopleRepository } from '../../../src/repositories';
import configs from '../../../src/configs';
import { eventGenerator, isApiGatewayResponse } from '../../utils';
import { PeopleModelMock } from '../../mock';

describe('People Respository', () => {
  it('Should return all peoples', async () => {
    const _peopleRepository = new PeopleRepository({ configs });
    const expected = await _peopleRepository.getAllPeople();

    expect(expected).toBeDefined();
    expect(isApiGatewayResponse(expected)).toBe(true);
  });

  it('Should create people and return newId', async () => {
    const entity: any = eventGenerator({
      body: PeopleModelMock,
    });

    const _peopleRepository = new PeopleRepository({ configs });
    const expected = await _peopleRepository.createPeople(entity);

    expect(expected).toBeDefined();
    expect(expected.status).toBe(201);
  });
});
