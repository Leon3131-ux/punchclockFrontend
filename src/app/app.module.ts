import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    AuthErrorHandler,
    DefaultErrorHandler,
    InternalServerErrorHandler,
    LoginErrorHandler,
    NotFoundErrorHandler,
    ValidationErrorHandler,
    DoNothingErrorHandler,
    httpInterceptProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
