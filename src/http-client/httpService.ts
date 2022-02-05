import { sendRequest, ResponseType } from './axiosWrapper';
import { createUrl } from './utils/createUrl.util';

export const httpService = (baseUrl: string) => {
  const get = async <Response>(
    endpoint: string,
    params?: unknown,
    responseType?: ResponseType,
  ): Promise<Response> => {
    const url = createUrl(baseUrl, endpoint);

    const response = await sendRequest<Response>(
      'GET',
      url,
      {},
      null,
      params as Record<string, string>,
      responseType,
    );

    if (response === undefined) {
      throw new Error('GET Response cannot be undefined');
    }

    return response;
  };

  return { get };
};
