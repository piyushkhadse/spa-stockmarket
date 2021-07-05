import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { stringify } from '@angular/compiler/src/util';
import { environment } from 'src/environments/environment';
import { LoginUser } from 'src/app/modules/model/login-user';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/model/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpService: HttpClient) {}
  headersWithoutToken= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
   headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Authorization', 'Bearer '+this.getToken());

  login(loginuser: LoginUser): Observable<any> {
    let loginURl = environment.baseUrl + '/user_management/users/login';
    return this._httpService.post<any>(loginURl, loginuser, {
      headers: this.headersWithoutToken
    });
  }

  signUp(user: User): Observable<any> {
    let endpointUrl = environment.baseUrl + '/user_management/users/addUser';
    return this._httpService.post<any>(endpointUrl, user, {
      headers: this.headersWithoutToken
    });
  }

  registerCompany(payload:any): Observable<any> {
    let endpointUrl = environment.baseUrl + '/company_management/api/v1.0/market/company/register';
    return this._httpService.post<any>(endpointUrl, payload, {
      headers: this.headers
    });
  }

  getCompanyDetails(companyCode:any): Observable<any> {
    let endpointUrl = environment.baseUrl + '/company_management/api/v1.0/market/company/'+companyCode;
    return this._httpService.get<any>(endpointUrl, {
      headers: this.headers
    });
  }

  getAllCompanyDetails(): Observable<any> {
    let endpointUrl = environment.baseUrl + '/company_management/api/v1.0/market/company';
    return this._httpService.get<any>(endpointUrl, {
      headers: this.headers
    });
  }

  deleteCompany(companyCode:any): Observable<any> {
    let endpointUrl = environment.baseUrl + '/company_management/api/v1.0/market/company/delete/'+companyCode;
    return this._httpService.delete<any>(endpointUrl);
  }

  getCompanyLatestStockDetails(companyCode:any): Observable<any> {
    let endpointUrl = environment.baseUrl + '/stock_management/api/v1.0/market/stock/'+companyCode;
    return this._httpService.get<any>(endpointUrl, {
      headers: this.headers
    });
  }

  getCompanyStocksDetails(companyCode:any,startDate:any, endDate:any): Observable<any> {
    let endpointUrl = environment.baseUrl + '/stock_management/api/v1.0/market/stock/'+companyCode+"/"+startDate+"/"+endDate;
    return this._httpService.get<any>(endpointUrl, {
      headers: this.headers
    });
  }

  addStockPrice(payload:any,companyCode:any): Observable<any> {
    let endpointUrl = environment.baseUrl + '/stock_management/api/v1.0/market/stock/add/'+companyCode;
    return this._httpService.post<any>(endpointUrl, payload, {
      headers: this.headers
    });
  }

  getToken() : string {
    let token = sessionStorage.getItem("token");
    if(token) {
      return token;
    }
    return '';
  }

}
