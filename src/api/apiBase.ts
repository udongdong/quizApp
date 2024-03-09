import axios from 'axios';

export const apiBase = axios.create();

apiBase.interceptors.request.use(
  request => {
    console.log('[[request]] ', request);
    return request;
  },
  error => {
    console.log('[[request]] error', error);
    return error;
  },
);

apiBase.interceptors.response.use(
  response => {
    console.log('[[response]] ', response);
    return response;
  },
  error => {
    console.log('[[response]] error', error);
    return error;
  },
);
