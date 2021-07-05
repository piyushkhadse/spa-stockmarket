import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSearched = false;
  companyDeails: any;
  stockDetails = new Array();
  stockPrices = new Array();
  homeFormGroup: FormGroup;
  constructor(private router: Router,
    private apiService: ApiService) { 
      this.homeFormGroup = new FormGroup({
        companyCode : new FormControl(''),
        startDate : new FormControl(''),
        endDate : new FormControl('')
      });
    }


  ngOnInit() : void {
    let currentDate = sessionStorage.getItem("currentDate") ? sessionStorage.getItem("currentDate") : '';
    if(currentDate!=null) {
      this.homeFormGroup.controls.endDate.setValue(currentDate);
      let endDate : any = new Date(currentDate);
      let startDate : any = new Date();
      startDate.setDate(endDate.getDate()-30);
      const dayOfMonth = startDate.getDate();
      const month = startDate.getMonth();
      const year = startDate.getFullYear();

      const formattedStartDate = year + "-" + this.pad(month + 1) + "-" + this.pad(dayOfMonth);
      this.homeFormGroup.controls.startDate.setValue(formattedStartDate);
    }
    
  }

  pad(n:any) {
    return n<10 ? '0'+n : n;
  }

  serach() : void {
    this.apiService.getCompanyDetails(this.homeFormGroup.value['companyCode']).subscribe(response=>{
      if(response) {
        this.companyDeails = response;
        this.getStockDetails();
        this.isSearched = true;
      }
    });
    
  }

  getStockDetails() : void {
    this.apiService.getCompanyStocksDetails(this.homeFormGroup.value['companyCode'],
     this.homeFormGroup.value['startDate'], this.homeFormGroup.value['endDate']).subscribe(response=>{
      this.stockDetails = [];
      this.stockPrices = [];
      this.stockDetails = response;
      for(let i=0;i<this.stockDetails.length;i++) {
        this.stockPrices.push(this.stockDetails[i].stockPrice);
      }
     });
  }

  viewAllCompanies(){
    this.router.navigateByUrl("view-all-companies");
  }

  registerCompany() {
    this.router.navigateByUrl("register-company");
  }

  stockPeriodSearch() {
    this.getStockDetails();
  }

  getDate(date: any){
    return date.split("T")[0];
  }

  getTime(date: any) {
    return date.split("T")[1].split(".")[0];
  }

  getMinValue() {
    if(this.stockDetails.length>0) {
      return Math.min(...this.stockPrices);
    }
    return 'NA';
  }

  getMaxValue() {
    if(this.stockDetails.length>0) {
      return Math.max(...this.stockPrices);
    }
    return 'NA';
  }

  getAvgValue() {
    if(this.stockDetails.length>0) {
      return this.stockPrices.reduce((a,b) => a + b, 0.0) / this.stockPrices.length;
    }
    return 'NA';
  }

}
