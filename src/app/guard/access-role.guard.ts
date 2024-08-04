import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoRecipes } from '../interface/info-recipes';
import { InfoUsers } from '../interface/info-users';
import { Authoriz } from '../interface/authoriz';
import { ApiService } from '../service/api.service';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AccessRoleGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router, private loginService: LoginService){
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //const user =this.loginService.userValue;
      if(this.loginService.userValue?.role ==='admin')
      return true;
    else return this.router.navigateByUrl('/un')
  }
  
}
