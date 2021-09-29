import {HttpResponseErrorHandler} from './http-response-error-handler';
import {MessageService} from 'primeng/api';
import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class LoginErrorHandler implements HttpResponseErrorHandler{
  constructor(
    private messageService: MessageService
  ) {}

  matches(error: HttpErrorResponse): boolean {
    return error.status === 403;
  }

  handle(error: HttpErrorResponse) {
    this.messageService.add({severity: 'error', summary: 'Wrong credentials', life: 5000});
  }
}
