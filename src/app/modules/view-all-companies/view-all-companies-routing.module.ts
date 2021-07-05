import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewAllCompaniesComponent} from './view-all-companies.component';

const routes: Routes = [{path:'',component : ViewAllCompaniesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAllCompaniesRoutingModule { }