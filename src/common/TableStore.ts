import { fromPromise, PromiseObserver } from 'helpers/PromiseObserver';
import { Page, Sort } from 'common/types';
import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { container } from 'container';
import { AxiosPromise } from 'axios';
import { SorterResult } from 'antd/lib/table/interface';

export abstract class TableStore<T> {
  protected readonly httpService;

  page = 0;
  size = 20;
  total = 0;
  sort: Sort[] = [];

  dataPromise?: PromiseObserver<Page<T>> = undefined;

  protected constructor() {
    this.httpService = container.httpService;

    makeObservable(this, {
      dataPromise: observable,
      page: observable,
      size: observable,
      sort: observable,
      total: observable,
      query: computed,
      fetchData: action.bound,
      change: action.bound,
      destroy: action.bound,
    });

    reaction(
      () => `${this.page}_${this.size}`,
      (value) => {
        this.fetchData();
        console.log(value);
      }
    );

    reaction(
      () => this.sort,
      () => this.fetchData()
    );

    reaction(
      () => this.dataPromise?.value,
      (value) => (this.total = value?.totalElements || 0)
    );
  }

  abstract api(): AxiosPromise<Page<T>>;

  fetchData() {
    this.dataPromise = fromPromise<Page<T>>(this.api());
  }

  change(page?: number, sort?: SorterResult<T> | SorterResult<T>[]) {
    this.page = page ? page - 1 : 0;

    this.sort = (Array.isArray(sort) ? sort : [sort])
      .filter((s) => s?.order)
      .map((s) => ({
        field: String(s?.field),
        order: s?.order === 'ascend' ? 'asc' : 'desc',
      }));
  }

  get query() {
    const sort = this.sort.length ? `&sort=${this.sort?.[0]?.field},${this.sort?.[0]?.order}` : '';
    return `?page=${this.page}&size=${this.size}${sort}`;
  }

  destroy() {
    this.dataPromise = undefined;
    this.page = 0;
    this.size = 20;
    this.total = 0;
    this.sort = [];
  }
}
