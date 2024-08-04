import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Notify } from 'notiflix';
import { first } from 'rxjs';
import { Authoriz } from 'src/app/interface/authoriz';
import { ApiService } from 'src/app/service/api.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  constructor(public loginService: LoginService, private apiService: ApiService,
    private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
   if (this.loginService.userValue) {
     //this.router.navigate(['/'])
   }

 };


 public submitted1 = false;
 registrForm!: FormGroup;
 ngOnInit() {
   this.registrForm = this.formBuilder.group({
     username: ['', Validators.required],
     password: ['', Validators.required],
     firstName: ['', Validators.required],
     lastName: ['', Validators.required],
     middleName: ['', Validators.required],
   })
 };

 get f() { return this.registrForm.controls; }

 onSubmit() {
   this.submitted1 = true;


   if (this.registrForm.invalid) {
    Notify.failure('Ошибка')
     return;
   }

   this.loginService.register(this.f['username'].value, this.f['password'].value, this.f['firstName'].value, this.f['lastName'].value, this.f['middleName'].value).subscribe(()=>{
        Notify.success('Вы успешно зарегистрировались')
        this.router.navigate(['/']);

       })
 }

}
