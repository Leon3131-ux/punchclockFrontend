import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {EntrySaveModule} from "../entry-save/entry-save.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    EntrySaveModule
  ]
})
export class HomeModule { }
