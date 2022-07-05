import { action, makeObservable, observable } from 'mobx';
import { DialogStore } from 'common/DialogStore';
import { fromPromise, PromiseObserver } from "helpers/PromiseObserver";
import { StationType } from '../types';
import { API } from "constant";

class Store extends DialogStore {
  savePromise?: PromiseObserver<void> = undefined;

  constructor() {
    super();
    makeObservable(this, {
      savePromise: observable,
      createItem: action.bound,
    });
  }

  createItem(entity: StationType) {
    this.savePromise = fromPromise(this.httpService.post(API.STATION, entity));
  }

  override destroy() {
    super.destroy();
    this.savePromise = undefined;
  }
}

export const store = new Store();
