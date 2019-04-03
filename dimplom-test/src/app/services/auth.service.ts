import { Injectable } from '@angular/core';
import { AuthenticateUserInterface } from '../interfaces/authenticate-user.interface';
import { of, Observable, from } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

const testUsers: AuthenticateUserInterface[] = [
  {
    username: 'TestUser1',
    password: '123456789',
  }, {
    username: 'TestUser2',
    password: '987654321',
  }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor() { }

  public auth(login: AuthenticateUserInterface): Observable<User> {
    return from(testUsers).pipe(
      first(user => user.username === login.username && user.password === login.password),
      tap(_ => this.isLoggedIn = true),
      map(user => {

        return { username: user.username, token: 'test-token'};
      })
    );
  }
}
