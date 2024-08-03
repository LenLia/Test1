import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InfoRecipes } from 'src/app/interface/info-recipes';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})
export class OneRecipeComponent implements OnInit{
  recipes: InfoRecipes[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPostsAll().subscribe({
      next: (res) => {
        console.log(res)
        this.recipes = res;
      },
      error: (err: HttpErrorResponse) =>
        console.log('Error!!!!!')
    })
  }
}
