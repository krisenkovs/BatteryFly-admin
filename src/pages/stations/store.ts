import { fromPromise, PromiseObserver } from 'helpers/PromiseObserver';
import { Page } from 'common/types';
import { StationType } from './types';
import { action, makeObservable, observable } from 'mobx';
import { container } from 'container';
import { API } from 'constants/api';

class Store {
  private readonly httpService;

  dataPromise?: PromiseObserver<Page<StationType>> = undefined;

  constructor() {
    this.httpService = container.httpService;

    makeObservable(this, {
      dataPromise: observable,
      fetchData: action.bound,
      destroy: action.bound,
    });
  }

  fetchData() {
    this.dataPromise = fromPromise<Page<StationType>>(
      this.httpService.get<Page<StationType>>(`${API.STATION}/all`)
    );
  }

  destroy() {
    this.dataPromise = undefined;
  }
}

export const store = new Store();
