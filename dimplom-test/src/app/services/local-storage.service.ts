import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setUser(user: User) {
    localStorage['user'] = JSON.stringify(user);
  }

  getUser(): User {
    return JSON.parse(localStorage['user']);
  }

  userExists(): boolean {
    return !!localStorage['user'];
  }
}
