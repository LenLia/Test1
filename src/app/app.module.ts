import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { MainPaigComponent } from './component/main-paig/main-paig.component';
import { AuthorizationComponent } from './component/authorization/authorization.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AdminComponent } from './component/admin/admin.component';
import { UsersComponent } from './component/admin/users/users.component';
import { CreateRecipeComponent } from './component/recipes/create-recipe/create-recipe.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './service/login.service';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { ApiService } from './service/api.service';
import { GuardService } from './service/guard.service';
import { SliderComponent } from './component/slider/slider.component';
import { NgxFlickingComponent, NgxFlickingModule } from '@egjs/ngx-flicking';
import { OneRecipeComponent } from './component/one-recipe/one-recipe.component';
import {Location} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    MainPaigComponent,
    AuthorizationComponent,
    RegistrationComponent,
    AdminComponent,
    UsersComponent,
    CreateRecipeComponent,
    ErrorPageComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    OneRecipeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxFlickingModule,
    
  ],
  providers: [
    LoginService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass:LoggingInterceptor,
    multi: true,
    deps: [LoginService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
