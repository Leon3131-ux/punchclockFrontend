import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean{
    return !!sessionStorage.getItem('token');

  }

  setToken(token: string){
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string{
    const token = sessionStorage.getItem('token');
    if(token){
      return JSON.parse(token);
    }
    return "";
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  getUsername(){
    const token = sessionStorage.getItem('token');
    if(token){
      return JSON.parse(atob(token.split('.')[1])).username;
    }
    return "";
  }

  hasPermissions(permissions: string[]): boolean{
    const token = sessionStorage.getItem('token');
    if(token){
      for(let permission of permissions){
        if(JSON.parse(atob(token.split('.')[1])).permissions.indexOf(permission) != -1){
          return true;
        }
      }
    }
    return false;
  }


}
