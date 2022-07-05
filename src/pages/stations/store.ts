
import { StationType } from './types';
import { makeObservable } from 'mobx';
import { API } from 'constant/api';
import { TableStore } from 'common/TableStore';

class Store extends TableStore<StationType> {
  constructor() {
    super();

    makeObservable(this, {});
  }

  override api() {
    return this.httpService.get(`${API.STATION}/all${this.query}`);
  }
}

export const store = new Store();
