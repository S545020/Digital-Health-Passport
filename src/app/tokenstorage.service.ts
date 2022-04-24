import { Injectable } from '@angular/core';

const TOKEN_KEY: any = localStorage.getItem('token')
const USER_KEY: any = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenstorageService {

  signOut() {
    window.sessionStorage.clear();
  }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): any {
    return TOKEN_KEY;
  }
  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser() {
    // return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  constructor() { }
}
