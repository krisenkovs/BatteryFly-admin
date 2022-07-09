import { action, makeObservable, observable } from 'mobx';
import { container } from "container";

export abstract class DialogStore<T> {
  protected readonly httpService;

  visible = false;
  data?:T = undefined;

  protected constructor() {
    this.httpService = container.httpService;

    makeObservable(this, {
      visible: observable,
      data:observable,
      show: action.bound,
      close: action.bound,
      destroy: action.bound,
    });
  }

  show(data?:T) {
    this.visible = true;
    this.data = data;
  }

  close() {
    this.visible = false;
  }

  destroy() {
    this.visible = false;
    this.data = undefined;
  }
}
