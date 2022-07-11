import { SimpleStore } from 'common/SimpleStore';
import { API } from 'constant';
import { fromPromise, PromiseObserver } from 'helpers/PromiseObserver';
import { action, makeObservable, observable } from 'mobx';

export class Store extends SimpleStore {
  savePromise?: PromiseObserver<string> = undefined;

  constructor() {
    super();
    makeObservable(this, {
      savePromise: observable,
      save: action.bound,
    });
  }

  save(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    this.savePromise = fromPromise(
      this.httpService.post(`${API.IMAGE}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    );
  }
}
