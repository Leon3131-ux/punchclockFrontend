import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private apiService: ApiService) { }

  public getPermissions(): Observable<any>{
    return this.apiService.getAll('/permissions');
  }
}
