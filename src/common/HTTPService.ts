import axios from 'axios';

export class HTTPService {
  private instance = axios.create({ baseURL: 'http://174.138.106.191:8080' });

  constructor() {
    this.instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
  }

  get<O>(path: string) {
    return this.instance.get(path) as Promise<O>;
  }

  post<I, O>(path: string, data: I) {
    return this.instance.post(path, data) as Promise<O>;
  }

  put<I>(path: string, data: I) {
    return this.instance.put(path, data);
  }

  delete(path: string) {
    return this.instance.delete(path) as Promise<void>;
  }
}
