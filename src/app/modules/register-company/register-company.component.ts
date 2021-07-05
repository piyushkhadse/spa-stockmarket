import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Company } from '../model/company';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  companyPayload : Company = <Company>{};
  registerCompanyForm: FormGroup;
  constructor(private router: Router,
    private apiService: ApiService) {
      this.registerCompanyForm = new FormGroup({
        companyName: new FormControl('',Validators.required),
        companyCode: new FormControl('',Validators.required),
        companyCEO: new FormControl('',Validators.required),
        companyTurnover: new FormControl('',Validators.required),
        companyWebsite: new FormControl('',Validators.required),
        stockExchange: new FormControl('',Validators.required)
      });
     }

  ngOnInit(): void {
  }


  registerCompany() : void {
    this.companyPayload.companyName = this.registerCompanyForm.value['companyName'];
    this.companyPayload.companyCode = this.registerCompanyForm.value['companyCode'];
    this.companyPayload.companyCEO = this.registerCompanyForm.value['companyCEO'];
    this.companyPayload.companyTurnover = this.registerCompanyForm.value['companyTurnover'];
    this.companyPayload.companyWebsite = this.registerCompanyForm.value['companyWebsite'];
    this.companyPayload.stockExchange = this.registerCompanyForm.value['stockExchange'];

    this.apiService.registerCompany(this.companyPayload).subscribe(response=>{
      this.router.navigate(['view-company-details'], {queryParams: {company_code: this.companyPayload.companyCode}});
    });

  }
}
