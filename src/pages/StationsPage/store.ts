import { TableStore } from 'common/TableStore';
import { Page } from 'common/types';
import { API } from 'constant/api';
import { fromPromise, PromiseObserver } from 'helpers/PromiseObserver';
import { action, makeObservable, observable } from 'mobx';

import { StationType } from './types';

class Store extends TableStore<StationType> {
  deleteItemPromise?: PromiseObserver<void> = undefined;
  constructor() {
    super();

    makeObservable(this, { deleteItemPromise: observable, deleteItem: action.bound });
  }

  override api() {
    return this.httpService.get<Page<StationType>>(`${API.STATION}/all${this.query}`);
  }

  deleteItem(id: StationType['id']) {
    this.deleteItemPromise = fromPromise(this.httpService.delete(`${API.STATION}/${id}`));
  }

  override destroy() {
    super.destroy();
    this.deleteItemPromise = undefined;
  }
}

export const store = new Store();
