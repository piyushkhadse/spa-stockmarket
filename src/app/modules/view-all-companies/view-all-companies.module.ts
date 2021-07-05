import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewAllCompaniesRoutingModule } from './view-all-companies-routing.module';
import { ViewAllCompaniesComponent } from './view-all-companies.component';

@NgModule({
  declarations: [
    ViewAllCompaniesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ViewAllCompaniesRoutingModule
  ]
})
export class ViewAllCompaniesModule { }
