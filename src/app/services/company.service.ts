import {EventEmitter, Injectable, Output} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Company} from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private apiService: ApiService) { }

  @Output() companyEditEmitter: EventEmitter<Company> = new EventEmitter<Company>();
  @Output() companySavedEmitter: EventEmitter<any> = new EventEmitter<any>();

  public getCompanies(): Observable<any>{
    return this.apiService.getAll('/companies');
  }

  public createCompany(company: Company): Observable<any>{
    return this.apiService.postSingle('/company', company);
  }

  public updateCompany(company: Company): Observable<any>{
    return this.apiService.putSingle('/company', company);
  }

  public deleteCompany(company: Company): Observable<any>{
    return this.apiService.deleteSingle('/company/' + company.id);
  }

  public editCompany(company: Company){
    this.companyEditEmitter.emit(company);
  }

  public companySaved(){
    this.companySavedEmitter.emit();
  }

}
