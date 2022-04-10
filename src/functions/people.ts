import container from '../startup/container';
import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';

const peopleController: any = container.resolve('PeopleController');

const getAllPeopleBySwapi = peopleController.getAllPeopleBySwapi;
const getAllPeople = peopleController.getAllPeople;
const createPeople = peopleController.createPeople;

export = {
  getAllPeopleBySwapi,
  getAllPeople,
  createPeople: middy(createPeople).use(jsonBodyParser()),
};
