import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface AccountEntity {
  id: number;
  role: 'admin' | 'manager' | 'sales' | 'customer';
  email: string;
  username: string;
  avatarUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService implements RestApiInterface<AccountEntity> {
  // private readonly apiResourceUrl = 'https://crudcrud.com/api/4c96e6fb94aa4b6899a525571c56f776/account';
  private readonly apiResourceUrl = 'https://spyderapp-001-default-rtdb.firebaseio.com/';

  constructor(
    private httpClient: HttpClient
  ) {}

  create(json: AccountEntity): Observable<AccountEntity> {
    const url = this.apiResourceUrl;

    return this.httpClient.post<{ id: number }>(url, json)
      .pipe(
        map(({ id }) => ({ ...json, id }))
      );
  }

  delete(id: string | number): Observable<{ id: number }> {
    const url = `${this.apiResourceUrl}/${id}`;

    return this.httpClient.delete<{ id: number }>(url);
  }

  getAll(): Observable<AccountEntity[]> {
    const url = this.apiResourceUrl;

    return this.httpClient.get<AccountEntity[]>(url);
  }

  getById(id: string | number): Observable<AccountEntity> {
    const url = `${this.apiResourceUrl}/${id}`;

    return this.httpClient.get<AccountEntity>(url);
  }

  update(id: number, json: Partial<AccountEntity>): Observable<AccountEntity> {
    const url = `${this.apiResourceUrl}/${id}`;

    return this.httpClient.put<AccountEntity>(url, json);
  }

}

/**
 * Task 1: complexity Level 3
 * */
interface RestApiInterface<T extends object> {
  create(json: T): Observable<T>;
  getAll(): Observable<T[]>;
  getById(id: string | number): Observable<T>;
  update(id: string | number, json: Partial<T>): Observable<T>;
  delete(id: string | number): Observable<{ id: string | number }>;
}

/**
 * Task 2: complexity Level 3
 * */
interface StatefullInterface<S> {
  store: BehaviorSubject<S>;
  state$: Observable<S>;

  dispatch(action: { type: string, payload?: any; }): void;
  setState(state: Partial<S>): void;
  getState(): S;
  select(mapper: (state) => any): Observable<S>;
}
