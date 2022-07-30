import {
  IHttpClient,
  IHttpRequest,
  IHttpResponse,
} from '@/data/protocols/http.protocol';
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
}

export default HttpClient;
