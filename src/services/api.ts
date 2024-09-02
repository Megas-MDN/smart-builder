import axios, { AxiosHeaders } from "axios";

export interface IResponse<T> {
  message: string;
  error: boolean;
  err: unknown;
  data: T;
}

const baseAuth = (auth: AxiosHeaders | object = {}) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      ...auth,
    },
  };
};

const app = async <T>({
  method = "GET",
  url = "",
  data = {},
  auth = {},
} = {}): Promise<IResponse<T>> => {
  const nAuth = baseAuth(auth);

  try {
    const response: { data: T } = await axios({
      method,
      url: url,
      data,
      ...nAuth,
    });

    return { data: response.data, error: false, err: null, message: "" };
  } catch (error) {
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { message, error: true, err: error, data: [] as T };
  }
};

const get = async <T>({ url = "", data = {}, auth = {} } = {}) => {
  return app<T>({ method: "GET", url, auth, data });
};

const remove = async <T>({ url = "", data = {}, auth = {} }) =>
  app<T>({ method: "DELETE", url, data, auth });

const put = async <T>({ url = "", data = {}, auth = {} }) => {
  return <T>app({
    method: "PUT",
    url,
    data,
    auth,
  });
};

const post = async <T>({ url = "", data = {}, auth = {} }) =>
  app<T>({
    method: "POST",
    url,
    data,
    auth,
  });

export const api = {
  get,
  delete: remove,
  put,
  post,
};
