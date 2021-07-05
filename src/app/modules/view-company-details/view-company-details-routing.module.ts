import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewCompanyDetailsComponent} from './view-company-details.component';

const routes: Routes = [{path:'',component : ViewCompanyDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCompanyDetailsRoutingModule { }