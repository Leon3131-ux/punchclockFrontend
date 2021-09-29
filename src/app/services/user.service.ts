import {EventEmitter, Injectable, Output} from '@angular/core';
import {ReturnUser} from "../models/return-user";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {SaveUser} from "../models/save-user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  @Output() userEditEmitter: EventEmitter<ReturnUser> = new EventEmitter<ReturnUser>();

  public editUser(user: ReturnUser){
    this.userEditEmitter.emit(user);
  }

  public getUsers(): Observable<any>{
    return this.apiService.getAll('/users');
  }

  public createUser(user: SaveUser): Observable<any>{
    return this.apiService.postSingle('/user', user);
  }

  public updateUser(user: SaveUser): Observable<any>{
    return this.apiService.putSingle('/user', user);
  }

  public deleteUser(user: ReturnUser): Observable<any>{
    return this.apiService.deleteSingle('/user/' + user.id);
  }

}
