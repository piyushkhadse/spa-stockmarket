import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { LoginUser } from '../model/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginUser = <LoginUser>{};
  isSignupSuccessful = false;
  isLoginFailed = false;
  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
    if ( sessionStorage.getItem("isSignupSuccessful") === "true" ) {
      this.isSignupSuccessful = true;
      sessionStorage.removeItem("isSignupSuccessful");
    }
  }

  login() : void {
    this.user.username = this.loginForm.value['username'];
    this.user.password = this.loginForm.value['password'];

    this.apiService.login(this.user).subscribe(response => {
      if(response!=null) {
        sessionStorage.setItem("token",response["token"]);
        sessionStorage.setItem("role",response["role"]);
        sessionStorage.setItem("currentDate",response["currentDate"].split("T")[0]);
        this.router.navigateByUrl('home');
        //redirect it to home
      } else {

      }
    },
    error=>{
      this.isLoginFailed = true;
    })
  }

  signup() : void {
    this.router.navigateByUrl('signup');
  }

}
