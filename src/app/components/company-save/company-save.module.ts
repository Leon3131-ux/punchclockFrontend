import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanySaveComponent} from "./company-save.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
    declarations: [
        CompanySaveComponent
    ],
    exports: [
        CompanySaveComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class CompanySaveModule { }
