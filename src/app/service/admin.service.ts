import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoUsers } from '../interface/info-users';
import { InfoRecipes } from '../interface/info-recipes';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsersAll(){
    return this.http.get<InfoUsers[]>('https://evo-academy.wckz.dev/api/cooking-blog/users')
  }

  
  getPostsAll(){
    return this.http.get<InfoRecipes[]>('https://evo-academy.wckz.dev/api/cooking-blog/posts')
  }

}
