export type IHttpMethods = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';

export interface IHttpRequest<T = any> {
  method: IHttpMethods;
  body?: T;
  headers?: any;
}

export enum IHttpResponseCodes {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export interface IHttpResponse<T = any> {
  statusCode: IHttpResponseCodes;
  body: T;
}

export interface IInterceptors {
  onSuccess: () => void;
  onFailure: () => void;
}

export interface IHttpClient {
  request: <I, O>(params: IHttpRequest<I>) => Promise<IHttpResponse<O>>;
  setRequestInterceptors: (handler: IInterceptors) => void;
  setResponseInterceptors: (handler: IInterceptors) => void;
}
