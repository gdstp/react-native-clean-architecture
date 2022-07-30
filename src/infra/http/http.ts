import {
  IHttpClient,
  IHttpRequest,
  IHttpResponse,
  IInterceptors,
} from '../../data/protocols/http.protocol';
import axios, { AxiosInstance } from 'axios';

class HttpClient implements IHttpClient {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: AxiosInstance
  ) {
    this.baseUrl = baseUrl;
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'x-api-key': '0',
      },
    });
    this.httpClient.interceptors;
  }

  public async request<I, O>({
    method,
    body,
    headers,
  }: IHttpRequest<I>): Promise<IHttpResponse<O>> {
    const { data, status } = await this.httpClient.request<O>({
      method: <string>method,
      headers,
      data: body,
    });

    return {
      body: data,
      statusCode: status,
    };
  }

  public setRequestInterceptors({ onSuccess, onFailure }: IInterceptors) {
    this.httpClient.interceptors.request.use(onSuccess, onFailure);
  }

  public setResponseInterceptors({ onSuccess, onFailure }: IInterceptors) {
    this.httpClient.interceptors.response.use(onSuccess, onFailure);
  }
}

export default HttpClient;
