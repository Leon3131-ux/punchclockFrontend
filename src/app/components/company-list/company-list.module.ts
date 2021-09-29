import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyListComponent} from "./company-list.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {CompanySaveModule} from "../company-save/company-save.module";



@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CompanySaveModule
  ]
})
export class CompanyListModule { }
