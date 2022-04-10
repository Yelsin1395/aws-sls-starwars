import { DynamoDB } from 'aws-sdk';

let options = {};

// console.log(process.env.JEST_WORKER_ID);

if (process.env.JEST_WORKER_ID) {
  options = {
    endpoint: 'http://localhost:8000',
    region: 'local',
    sslEnabled: false,
    onvertEmptyValues: true,
  };
}

export = {
  dynamondb: new DynamoDB.DocumentClient(options),
};
