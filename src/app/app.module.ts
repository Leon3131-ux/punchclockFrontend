import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AuthErrorHandler } from './errorHandlers/auth-error-handler';
import { DefaultErrorHandler } from './errorHandlers/default-error-handler';
import { DoNothingErrorHandler } from './errorHandlers/do-nothing-error-handler';
import { InternalServerErrorHandler } from './errorHandlers/internal-server-error-handler';
import { LoginErrorHandler } from './errorHandlers/login-error-handler';
import { NotFoundErrorHandler } from './errorHandlers/not-found-error-handler';
import { ValidationErrorHandler } from './errorHandlers/validation-error-handler';
import { httpInterceptProviders } from './httpInterceptors/HttpInteceptProviders';
import {LoginComponent} from "./components/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {ToastModule} from "primeng/toast";
import {LoginModule} from "./components/login/login.module";
import {CompanySaveModule} from "./components/company-save/company-save.module";
import {CompanyListModule} from "./components/company-list/company-list.module";
import {UserSaveModule} from "./components/user-save/user-save.module";
import {UserListModule} from "./components/user-list/user-list.module";
import {EntrySaveModule} from "./components/entry-save/entry-save.module";
import {EntryListModule} from "./components/entry-list/entry-list.module";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './components/home/home.component';
import {HomeModule} from "./components/home/home.module";
import {EntryListComponent} from "./components/entry-list/entry-list.component";
import {UserListComponent} from "./components/user-list/user-list.component";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'entries', component: EntryListComponent},
  {path: 'users', component: UserListComponent},
  {path: '**', redirectTo: '/login'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    ToastModule,
    LoginModule,
    CompanySaveModule,
    CompanyListModule,
    UserSaveModule,
    UserListModule,
    EntrySaveModule,
    EntryListModule,
    HomeModule
  ],
  providers: [
    AuthErrorHandler,
    DefaultErrorHandler,
    InternalServerErrorHandler,
    LoginErrorHandler,
    NotFoundErrorHandler,
    ValidationErrorHandler,
    DoNothingErrorHandler,
    httpInterceptProviders,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
