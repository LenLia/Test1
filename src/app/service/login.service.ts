import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authoriz } from '../interface/authoriz';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = "https://evo-academy.wckz.dev/api/cooking-blog/users/sign";
  // currentUser ={};
  private userSubject: BehaviorSubject<Authoriz | null>;
  public user: Observable<Authoriz | null>;
  public isLogged = new BehaviorSubject<boolean>(false);
  //headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient, private router: Router) {
    // const token= localStorage.getItem('access_token')
    this.userSubject = new BehaviorSubject<Authoriz | null>(null);
    this.user = this.userSubject.asObservable();

  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.uri, { username, password }).pipe(
      map(user => {
        this.userSubject.next(user);  
          return user;
      })
      
    )
  }


  

  logout() {
    localStorage.removeItem('token');
    this.userSubject.next(null);
  }

  private refreshTokenTimeout?: any;




}
