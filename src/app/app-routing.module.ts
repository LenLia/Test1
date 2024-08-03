import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPaigComponent } from './component/main-paig/main-paig.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { AuthorizationComponent } from './component/authorization/authorization.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AdminComponent } from './component/admin/admin.component';
import { CreateRecipeComponent } from './component/recipes/create-recipe/create-recipe.component';
import { AppComponent } from './app.component';
import { AccessRoleGuard } from './guard/access-role.guard';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { OneRecipeComponent } from './component/one-recipe/one-recipe.component';

const routes: Routes = [
  {
    path: '', //Главная
    component: MainPaigComponent
  },
  {
    path: 'recipes', //Каталог рецептов
    component: RecipesComponent,
  },
  {
    path: 'recipes/:id', //Страница одного рецепта
    component: OneRecipeComponent,
  },
 {
  path: 'authorization', //Авторизация
  component: AuthorizationComponent
 },
 {
  path: 'registration', //Регистрация
  component: RegistrationComponent
 },
 {
  path: 'admin', //Панель администрирования
  component: AdminComponent,
  canActivate: [AccessRoleGuard]
 },
 {
  path:  'create-recipe', // Создание рецепта
  component: CreateRecipeComponent
 },
 {
  path: 'error',
  component: ErrorPageComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
