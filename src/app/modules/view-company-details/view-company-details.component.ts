import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-view-company-details',
  templateUrl: './view-company-details.component.html',
  styleUrls: ['./view-company-details.component.css']
})
export class ViewCompanyDetailsComponent implements OnInit {
  companyDetails: any;
  stockDetails: any;

  constructor(private route: ActivatedRoute,
    private apiService: ApiService) {
    this.route.queryParams.subscribe(params => {
      if(params['company_code']) {
        this.getCompanyDetails(params['company_code']);
      }
  });
   }

  ngOnInit(): void {
    
  }

  getCompanyDetails(companyCode : any) : void{
    this.apiService.getCompanyDetails(companyCode).subscribe(response=>{
      this.getStockDetails(companyCode);
      this.companyDetails = response;
    })
  }

  getStockDetails(companyCode: any) : void {
    this.apiService.getCompanyLatestStockDetails(companyCode).subscribe(response=>{
      this.stockDetails = response;
    })
  }

}
