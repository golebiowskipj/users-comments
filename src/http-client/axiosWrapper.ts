import axios, {
  AxiosRequestConfig,
  ResponseType as AxiosResponseType,
} from "axios";

export const sendRequest = async <TResponse>(
  method: "GET",
  url: string,
  headers?: Record<string, string>,
  body?: unknown,
  params?: Record<string, string | number>,
  responseType?: ResponseType
): Promise<TResponse> => {
  const request: AxiosRequestConfig = {
    method,
    url,
    data: body,
    headers,
    params,
    responseType,
  };

  const response = await axios.request(request);

  if (response.status.toString().startsWith("2")) {
    return response.data;
  }

  throw new Error(
    `Error call: ${method} ${url}. Status code is not 200. Details: ${JSON.stringify(
      response
    )}`
  );
};

export type ResponseType = AxiosResponseType;
