import HttpClient from '../../../infra/http/http';

export const makeHttpClient = () => new HttpClient('localhost:3000');
