import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { InfoUsers } from './interface/info-users';
import { filter } from 'rxjs';
import { InfoRecipes } from './interface/info-recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private apiService: ApiService){}
  public recipes: InfoRecipes[]=[];
  public users: InfoUsers[]=[];

  getUsers(){
    this.apiService.getUsersAll().subscribe({
      next: (res) =>{
        console.log(res)
      },
      error: (err: HttpErrorResponse) =>
        console.log('Error!!!!!')
    })
  }

  getOneUser(){
    this.apiService.getUsersOne('1').subscribe({
      next: (res) =>{
        console.log(res)
      },
      error: (err: HttpErrorResponse) =>
        console.log('Error!!!!!')
    })
  }

  getPosts(){
    this.apiService.getPostsAll().subscribe({
      next: (res) =>{
        console.log(res)
        this.recipes = res;
      },
      error: (err: HttpErrorResponse) =>
        console.log('Error!!!!!')
    })

    
  }

  postUsersSign(){
    this.apiService.postUserCreate().subscribe({
      next: (res) =>{
        console.log(res)
      },
      error: (err: HttpErrorResponse) =>
        console.log('Error!!!!!')
    })
  }

  

}
