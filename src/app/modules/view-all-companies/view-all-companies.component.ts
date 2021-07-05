import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-view-all-companies',
  templateUrl: './view-all-companies.component.html',
  styleUrls: ['./view-all-companies.component.css']
})
export class ViewAllCompaniesComponent implements OnInit {
  
  allCompaniesDetails = new Array();
  constructor(private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllCompanyDetails().subscribe(response=>{
      this.allCompaniesDetails = response;
    });
  }

  navigateToViewCompanyDetails(companyCode:any) : void {
    this.router.navigate(["view-company-details"], { queryParams: {company_code: companyCode}});
  }

}
