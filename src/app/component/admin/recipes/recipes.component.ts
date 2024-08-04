import { Component } from '@angular/core';
import { InfoRecipes } from 'src/app/interface/info-recipes';
import { AdminService } from 'src/app/service/admin.service';
import { Panel } from '../admin-page/admin-page.component';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  constructor( private adminService: AdminService){
    this.adminService.getPostsAll().subscribe((recipes)=> {this.recipes=recipes;})
  }
  public recipes: InfoRecipes[]= [];
  public panel: Panel = 'recipes';
}
