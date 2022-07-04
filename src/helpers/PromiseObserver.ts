import { makeObservable, observable, runInAction } from 'mobx';
import { AxiosPromise, AxiosResponse } from 'axios';

enum PROMISE_TYPE {
  PENDING,
  FULFILLED,
  ERROR,
}

export class PromiseObserver<T> {
  state: PROMISE_TYPE = PROMISE_TYPE.PENDING;
  value?: T;

  constructor(promise: AxiosPromise<T>) {
    makeObservable(this, {
      state: observable,
      value: observable,
    });

    promise
      .then((response: AxiosResponse<T>) => {
        runInAction(() => {
          this.state = PROMISE_TYPE.FULFILLED;
          this.value = response?.data;
        });
      })
      .catch(() =>
        runInAction(() => {
          this.state = PROMISE_TYPE.ERROR;
        })
      );
  }

  get pending() {
    return this.state === PROMISE_TYPE.PENDING;
  }

  get fulfilled() {
    return this.state === PROMISE_TYPE.FULFILLED;
  }

  get error() {
    return this.state === PROMISE_TYPE.ERROR;
  }
}

export function fromPromise<T>(promise: AxiosPromise<T>) {
  return new PromiseObserver(promise);
}
