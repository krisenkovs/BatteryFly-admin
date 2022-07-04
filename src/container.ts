import { ApplicationService } from './common/ApplicationService';
import { HTTPService } from './common/HTTPService';

class Container {
  private readonly applicationServiceInstance;
  private readonly httpServiceInstance;

  constructor() {
    this.applicationServiceInstance = new ApplicationService();
    this.httpServiceInstance = new HTTPService();
  }

  get applicationService() {
    return this.applicationServiceInstance;
  }

  get httpService() {
    return this.httpServiceInstance;
  }
}

export const container = new Container();
