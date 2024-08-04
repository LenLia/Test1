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


}
