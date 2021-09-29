import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {UserSaveModule} from "../user-save/user-save.module";



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    UserSaveModule
  ]
})
export class UserListModule { }
