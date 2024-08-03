import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  constructor(private _location: Location, private router: Router)
  {}

  // errorType = 	'unauthorized' | 'not-found'
  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
      
  }
}
