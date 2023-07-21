import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string):boolean{
    return username === 'user' && password === 'password';
  }

  constructor() { }
}
