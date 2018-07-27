import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  private keyUser: string = 'CurrentUser';

  constructor(
    private storage: Storage
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // TODO { implement handleResponse }
    return next.handle(request);

  }
} 