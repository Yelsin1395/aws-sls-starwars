import axios, { AxiosRequestConfig } from 'axios';

interface AxiosLocalConfig {
  baseUrl: string;
}

function getAxios(axcfg: AxiosLocalConfig) {
  let finalCfg: AxiosRequestConfig = {
    headers: {},
    baseURL: axcfg.baseUrl,
  };

  const client = axios.create(finalCfg);

  //Set default content type
  client.defaults.headers.common.Accept = 'application/json';

  // set request axios
  client.interceptors.request.use(
    (request: any) => {
      return request;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  // set response axios
  client.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  return client;
}

export { getAxios };
