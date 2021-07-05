import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./modules/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'register-company',
    loadChildren: () =>
      import('./modules/register-company/register-company.module').then((m) => m.RegisterCompanyModule),
  },
  {
    path: 'view-all-companies',
    loadChildren: () =>
      import('./modules/view-all-companies/view-all-companies.module').then((m) => m.ViewAllCompaniesModule),
  },
  {
    path: 'view-company-details',
    loadChildren: () =>
      import('./modules/view-company-details/view-company-details.module').then((m) => m.ViewCompanyDetailsModule),
  },
  {
    path: '**',
    redirectTo: '/login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
