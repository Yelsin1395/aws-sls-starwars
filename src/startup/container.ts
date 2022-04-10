import { createContainer, asValue, asClass } from 'awilix';

// Setting app
import configs from '../configs';

// Repositories
import { PeopleRepository } from '../repositories';

// Services
import { PeopleService } from '../services';

// Proxies
import { SwapiProxy } from '../proxies';

// Controllers
import { PeopleController } from '../controllers';

const container = createContainer();

container
  .register({
    configs: asValue(configs),
  })
  .register({
    PeopleRepository: asClass(PeopleRepository).singleton(),
  })
  .register({
    PeopleService: asClass(PeopleService).singleton(),
  })
  .register({
    SwapiProxy: asClass(SwapiProxy).singleton(),
  })
  .register({
    PeopleController: asClass(PeopleController.bind(PeopleController)).singleton(),
  });

export default container;
