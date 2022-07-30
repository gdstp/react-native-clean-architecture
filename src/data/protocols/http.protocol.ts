export type IHttpMethods = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';

export interface IHttpRequest<T = any> {
  method: IHttpMethods;
  body?: T;
  headers?: any;
}

export interface IHttpResponse<T = any> {
  statusCode: number;
  body?: T;
}

export interface IHttpClient {
  request: (params: IHttpRequest) => Promise<IHttpResponse>;
}
