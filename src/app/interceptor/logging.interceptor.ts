import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authoriz } from '../interface/authoriz';
import { LoginService } from '../service/login.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.loginService.userValue;
    const isLoggedIn =user?.jwtToken;

    const idToken =localStorage.getItem('JwtToken')

    if(isLoggedIn){
    const cloned=request.clone({setHeaders: {Authorization: `${user?.jwtToken}`}})
    console.log(user?.jwtToken)
    
     console.log(cloned)
     return next.handle(cloned);
  } else
    return next.handle(request);
  }
}
