import { PeopleService } from '../../../src/services';
import { PeopleRepositoryMock, PeopleModelMock } from '../../mock';

describe('People Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should all peoples of service', async () => {
    const PeopleRepository = PeopleRepositoryMock;
    PeopleRepository.getAllPeople.mockReturnValue({
      status: 200,
      body: {
        data: [
          {
            nombre: 'Luke Skywalker',
            tipo: 'male',
            masa: '77',
            color_pelo: 'blond',
            aniversario: '19BBY',
            color_ojo: 'blue',
            altura: '172',
            fecha_fundado: '2022-04-10T02:52:08.076Z',
            color_piel: 'fair',
            id: 'caff461a-f0dc-47ec-bda8-f335d8b0b16c',
          },
        ],
      },
    });

    const _peopleService = new PeopleService({ PeopleRepository });
    const expected = await _peopleService.getAllPeople();

    expect(expected).toBeDefined();
    expect(expected.status).toBe(200);
  });

  it('Should create people of service', async () => {
    const PeopleRepository = PeopleRepositoryMock;
    PeopleRepository.createPeople.mockReturnValue({
      status: 201,
      body: { newId: 'caff461a-f0dc-47ec-bda8-f335d8b0b16c' },
    });

    const _peopleService = new PeopleService({ PeopleRepository });
    const expected = await _peopleService.createPeople(PeopleModelMock);

    console.log(expected);
    expect(expected).toBeDefined();  
    expect(expected.status).toBe(201);  
  });
});
