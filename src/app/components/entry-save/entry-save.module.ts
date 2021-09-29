import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntrySaveComponent} from "./entry-save.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";



@NgModule({
  declarations: [
    EntrySaveComponent
  ],
  exports: [
    EntrySaveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class EntrySaveModule { }
