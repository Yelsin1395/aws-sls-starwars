import { DynamoDB } from 'aws-sdk';

let options = {};

if (process.env.JEST_WORKER_ID) {
  options = {
    region: 'sa-east-1',
  };
}

export = {
  dynamondb: new DynamoDB.DocumentClient(options),
};
