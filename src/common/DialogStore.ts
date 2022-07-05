import { action, makeObservable, observable } from 'mobx';
import { container } from "container";

export abstract class DialogStore {
  protected readonly httpService;

  visible = false;

  protected constructor() {
    this.httpService = container.httpService;

    makeObservable(this, {
      visible: observable,
      show: action.bound,
      close: action.bound,
      destroy: action.bound,
    });
  }

  show() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  destroy() {
    this.visible = false;
  }
}
