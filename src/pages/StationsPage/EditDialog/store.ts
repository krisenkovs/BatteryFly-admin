import { DialogStore } from 'common/DialogStore';
import { API } from 'constant';
import { fromPromise, PromiseObserver } from 'helpers/PromiseObserver';
import { action, makeObservable, observable } from 'mobx';

import { StationType } from '../types';

class Store extends DialogStore<StationType> {
  savePromise?: PromiseObserver<void> = undefined;

  constructor() {
    super();
    makeObservable(this, {
      savePromise: observable,
      saveItem: action.bound,
    });
  }

  saveItem(entity: StationType) {
    this.savePromise = fromPromise(this.httpService.post(API.STATION, entity));
  }

  override destroy() {
    super.destroy();
    this.savePromise = undefined;
  }
}

export const store = new Store();
