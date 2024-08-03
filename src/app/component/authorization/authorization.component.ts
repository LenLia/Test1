import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { Authoriz } from 'src/app/interface/authoriz';
import { ApiService } from 'src/app/service/api.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  constructor(public loginService: LoginService, private apiService: ApiService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    if (this.loginService.userValue) {
      this.router.navigate(['/'])
    }

  };
  loading = false;
  users?: Authoriz[];
  public submitted = false;
  signInForm!: FormGroup;
  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  };

  get f() { return this.signInForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.login(this.f['username'].value, this.f['password'].value)
      .pipe(first()).subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error: (err: HttpErrorResponse) =>
          console.log('Error!!!!!')
      })
      console.log("User is logged in");
  }

    getUsers(){
      this.apiService.getUsersAll().subscribe({
        next: (res) =>{
          console.log(res)
        },
        error: (err: HttpErrorResponse) =>
          console.log('Error!!!!!')
      })
    }
}
