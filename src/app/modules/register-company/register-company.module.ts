import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterCompanyRoutingModule } from './register-company-routing.module';
import { RegisterCompanyComponent } from './register-company.component';

@NgModule({
  declarations: [
    RegisterCompanyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegisterCompanyRoutingModule
  ]
})
export class RegisterCompanyModule { }
