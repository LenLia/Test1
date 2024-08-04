import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [
    UsersComponent,
    AdminPageComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
