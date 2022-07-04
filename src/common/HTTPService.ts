import axios from 'axios';

export class HTTPService {
  private instance = axios.create();

  get<T>(path: string) {
    return this.instance.get(path);
  }
}
