import { Component, OnInit } from '@angular/core';
import { InfoRecipes } from 'src/app/interface/info-recipes';
import { ApiService } from 'src/app/service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Arrow, AutoPlay, Pagination } from '@egjs/flicking-plugins';
import { Plugin } from '@egjs/ngx-flicking';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  recipes: InfoRecipes[]=[];
  constructor( private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getPostsAll().subscribe({
      next: (res) =>{
        this.recipes = res;
      },
      error: (err: HttpErrorResponse) =>
        console.log('Error!!!!!')
    })


    
  }
  plugins: Plugin[] = [new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false })];

}
