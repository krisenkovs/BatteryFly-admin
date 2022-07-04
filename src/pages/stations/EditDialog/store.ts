import { action, makeObservable, observable } from 'mobx';

class Store {
  visible = false;

  constructor() {
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

export const store = new Store();
