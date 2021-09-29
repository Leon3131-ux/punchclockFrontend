import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {Company} from "../../models/company";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(
    private companyService: CompanyService
  ) {
    this.companyService.companySavedEmitter.subscribe(() => {
      this.companyService.getCompanies().subscribe(companies => {
        this.companies = companies;
      });
    });
  }

  companies: Company[] = [];
  showEditCompanyDialog: boolean = false;

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  public editCompany(company: Company){
    this.companyService.editCompany(company);
    this.showEditCompanyDialog = true;
  }

  public deleteCompany(company: Company){
    this.companyService.deleteCompany(company).subscribe(() => {
      this.companies.splice(this.companies.indexOf(company), 1);
    });
  }

  public createCompany(){
    this.companyService.editCompany(new Company());
    this.showEditCompanyDialog = true;
  }

}
