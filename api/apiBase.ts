import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

export const apiBase = axios.create();

apiBase.interceptors.request.use((request: AxiosRequestConfig) => {
  console.log(request);
  return request;
});

apiBase.interceptors.response.use((response: AxiosResponse) => {
  console.log('response ', response);
  return response;
});
