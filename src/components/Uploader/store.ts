import { fromPromise, PromiseObserver } from 'helpers/PromiseObserver';
import { action, makeObservable, observable } from 'mobx';

export class Store {
  savePromise?: PromiseObserver<void> = undefined;

  constructor() {
    makeObservable(this, {
      savePromise: observable,
      save: action.bound,
    });
  }

  save(file: File) {
    this.savePromise = fromPromise(
      new Promise<void>((resolve) => {
        resolve();
      }),
    );
  }
}
