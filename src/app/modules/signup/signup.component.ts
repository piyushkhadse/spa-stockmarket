import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { User } from '../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signuppayload: User = <User>{};
  signupFailed: boolean = false;
  constructor(private router: Router,
    private apiService: ApiService) {
      this.signupForm = new FormGroup({
        firstName: new FormControl('',Validators.required),
        lastName: new FormControl('',Validators.required),
        userName: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        contactNumber: new FormControl('',Validators.required),
      });
     }

  ngOnInit(): void {
  }


  signup() : void{
    this.signuppayload.firstName = this.signupForm.value['firstName'];
    this.signuppayload.lastName = this.signupForm.value['lastName'];
    this.signuppayload.userName = this.signupForm.value['userName'];
    this.signuppayload.password = this.signupForm.value['password'];
    this.signuppayload.contactNumber = this.signupForm.value['contactNumber'];

    this.apiService.signUp(this.signuppayload).subscribe(response=>{
        sessionStorage.setItem("isSignupSuccessful","true");
        this.router.navigateByUrl("login");
    }, error=>{
      this.signupFailed = true;
    })
  }
}
