import { sendRequest, ResponseType } from "./axiosWrapper";

const createUrl = (...urls: string[]) => urls.join("/");

export const httpService = (baseUrl: string) => {
  const get = async <TResponse>(
    endpoint: string,
    params?: unknown,
    responseType?: ResponseType
  ): Promise<TResponse> => {
    const url = createUrl(baseUrl, endpoint);

    const response = await sendRequest<TResponse>(
      "GET",
      url,
      {},
      null,
      params as Record<string, string>,
      responseType
    );

    if (response === undefined) {
      throw new Error("GET Response cannot be undefined");
    }

    return response;
  };

  return { get };
};
