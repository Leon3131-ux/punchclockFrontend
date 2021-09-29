import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntryListComponent} from "./entry-list.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {EntrySaveModule} from "../entry-save/entry-save.module";



@NgModule({
  declarations: [
    EntryListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    EntrySaveModule
  ]
})
export class EntryListModule { }
