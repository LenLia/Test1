import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { MainPaigComponent } from './component/main-paig/main-paig.component';
import { AuthorizationComponent } from './component/authorization/authorization.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { CreateRecipeComponent } from './component/recipes/create-recipe/create-recipe.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './service/login.service';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { SliderComponent } from './component/slider/slider.component';
import { NgxFlickingComponent, NgxFlickingModule } from '@egjs/ngx-flicking';
import { OneRecipeComponent } from './component/one-recipe/one-recipe.component';
import { Location} from '@angular/common'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ErrorPageUnauthorizedComponent } from './component/error-page-unauthorized/error-page-unauthorized.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    MainPaigComponent,
    AuthorizationComponent,
    RegistrationComponent,
    CreateRecipeComponent,
    ErrorPageComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    OneRecipeComponent,
    ErrorPageUnauthorizedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxFlickingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule
    
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
