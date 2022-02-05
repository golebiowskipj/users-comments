import axios, {
  AxiosRequestConfig,
  ResponseType as AxiosResponseType,
} from 'axios';

export const sendRequest = async <Response>(
  method: 'GET',
  url: string,
  headers?: Record<string, string>,
  body?: unknown,
  params?: Record<string, string | number>,
  responseType?: ResponseType,
): Promise<Response> => {
  const request: AxiosRequestConfig = {
    method,
    url,
    data: body,
    headers,
    params,
    responseType,
  };

  const response = await axios.request(request);

  if (response.status.toString().startsWith('2')) {
    if (response.headers['x-total-count']) {
      return {
        data: response.data,
        totalCount: response.headers['x-total-count'],
      } as any;
    }

    return response.data;
  }

  throw new Error(
    `Error call: ${method} ${url}. Status code is not 200. Details: ${JSON.stringify(
      response,
    )}`,
  );
};

export type ResponseType = AxiosResponseType;
