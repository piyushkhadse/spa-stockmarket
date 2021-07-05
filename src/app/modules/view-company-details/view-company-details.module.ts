import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewCompanyDetailsRoutingModule } from './view-company-details-routing.module';
import { ViewCompanyDetailsComponent } from './view-company-details.component';

@NgModule({
  declarations: [
    ViewCompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ViewCompanyDetailsRoutingModule
  ]
})
export class ViewCompanyDetailsModule { }
