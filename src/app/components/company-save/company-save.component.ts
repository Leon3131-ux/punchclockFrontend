import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {Company} from "../../models/company";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-company-save',
  templateUrl: './company-save.component.html',
  styleUrls: ['./company-save.component.css']
})
export class CompanySaveComponent implements OnInit {

  constructor(
    private companyService: CompanyService
  ) { }

  saveCompanyForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  })

  company: Company = new Company();


  ngOnInit(): void {
    this.companyService.companyEditEmitter.subscribe(company => {
      this.company = company;
      this.updateForm();
    })
  }

  public submitCompany(){
    if(this.company.id == null || this.company.id == 0){
      this.createCompany();
    }else{
      this.updateCompany();
    }
  }

  private createCompany(){
    this.companyService.createCompany(this.saveCompanyForm.getRawValue()).subscribe(() => {
      this.companyService.companySaved();
    });
  }

  private updateCompany(){
    this.companyService.updateCompany(this.saveCompanyForm.getRawValue()).subscribe(() => {
      this.companyService.companySaved();
    });
  }

  private updateForm(){
    this.saveCompanyForm.patchValue(this.company);
  }

}
