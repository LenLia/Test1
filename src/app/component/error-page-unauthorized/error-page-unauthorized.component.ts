import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page-unauthorized',
  templateUrl: './error-page-unauthorized.component.html',
  styleUrls: ['./error-page-unauthorized.component.css']
})
export class ErrorPageUnauthorizedComponent {
  constructor(private _location: Location, private router: Router)
  {}
  backClicked() {
    this._location.back();
  }
}
