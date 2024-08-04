import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authoriz } from '../interface/authoriz';
import { BehaviorSubject, catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = "https://evo-academy.wckz.dev/api/cooking-blog/users";
  // currentUser ={};
  private userSubject: BehaviorSubject<Authoriz | null>;
  public user: Observable<Authoriz | null>;
  public isLogged: boolean = false;

  private token: string='';

  constructor(private http: HttpClient, private router: Router) {
 
    this.userSubject = new BehaviorSubject<Authoriz | null>(null);
    this.user = this.userSubject.asObservable();

  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.uri}/sign`, { username, password }).pipe(
      tap(user => {
        this.userSubject.next(user); 
        localStorage.setItem('JwtToken', user.JwtToken) 
        this.isLogged=true;
          return user;
      })
      
    )
  }

  logout():void {
    this.token='';
    this.isLogged=false;
    localStorage.removeItem('JwtToken');
  }


  register(username: string, password: string, firstName:string, lastName:string, middleName: string){
    return this.http.post(`${this.uri}/registration`,{username,password, firstName, lastName, middleName});
  }


}
