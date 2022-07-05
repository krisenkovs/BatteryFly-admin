import axios from 'axios';

export class HTTPService {
  private instance = axios.create();

  constructor() {
    this.instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log(error);
        return Promise.reject(error);
      },
    );
  }

  get(path: string) {
    return this.instance.get(path);
  }

  post<I>(path: string, data: I) {
    return this.instance.post(path, data);
  }

  put<I>(path: string, data: I) {
    return this.instance.put(path, data);
  }

  delete(path: string) {
    return this.instance.delete(path);
  }
}
