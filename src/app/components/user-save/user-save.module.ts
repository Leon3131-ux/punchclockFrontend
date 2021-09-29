import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserSaveComponent} from "./user-save.component";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {MultiSelectModule} from "primeng/multiselect";



@NgModule({
  declarations: [
    UserSaveComponent
  ],
  exports: [
    UserSaveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    MultiSelectModule
  ]
})
export class UserSaveModule { }
