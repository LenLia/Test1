import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPaigComponent } from './component/main-paig/main-paig.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { AuthorizationComponent } from './component/authorization/authorization.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { CreateRecipeComponent } from './component/recipes/create-recipe/create-recipe.component';
import { AppComponent } from './app.component';
import { AccessRoleGuard } from './guard/access-role.guard';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { OneRecipeComponent } from './component/one-recipe/one-recipe.component';
import { UserRoleGuard } from './guard/user-role.guard';
import { ErrorPageUnauthorizedComponent } from './component/error-page-unauthorized/error-page-unauthorized.component';
import { AdminModule } from './component/admin/admin.module';


const routes: Routes = [
  {
    path: '', //Главная
    component: MainPaigComponent,
    title: 'Main Page'
  },
  {
    path: 'recipes', //Каталог рецептов
    component: RecipesComponent,
    title: 'Recipes'
  },
  {
    path: 'recipes/:id', //Страница одного рецепта
    component: OneRecipeComponent,
    title: 'Recipe'
  },
 {
  path: 'authorization', //Авторизация
  component: AuthorizationComponent,
  title:'Authorization'

 },
 {
  path: 'registration', //Регистрация
  component: RegistrationComponent,
  title:'Registration'
 },
 {
  path: 'admin', //Панель администрирования
  loadChildren: () =>import('./component/admin/admin.module').then(m => m.AdminModule),
  canActivate: [AccessRoleGuard],

 },
 {
  path:  'create-recipe', // Создание рецепта
  component: CreateRecipeComponent,
  title: 'Create recipe',
  canActivate: [UserRoleGuard]
 },

 {
  path: 'un',
  component: ErrorPageUnauthorizedComponent,
  title: 'Error'
 },
 {
  path: '**',
  component: ErrorPageComponent,
  title: 'Error'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
