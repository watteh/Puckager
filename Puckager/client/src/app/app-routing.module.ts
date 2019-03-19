import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { RecruitListComponent } from './recruit-list/recruit-list.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { UpdateAccountComponent } from './accounts/update-account/update-account.component';
import { DetailsComponent } from './recruit-list/details/details.component';
import { AddRecruitComponent } from './recruit-list/add-recruit/add-recruit.component';
import { ReportsComponent } from './recruit-list/reports/reports.component';
import { AddReportComponent } from './recruit-list/reports/add-report/add-report.component';

const routes: Routes = [
  { path: '', component: SigninComponent, data: {title: 'Log In'} },
  { path: 'logout', redirectTo: '', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent, data: {title: 'Register'} },
  { path: 'recruits', component: RecruitListComponent, data: {title: 'Recruits'} },
  // { path: 'signin', component: SigninComponent },
  { path: 'about', component: AboutComponent, data: {title: 'About Us'} },
  { path: 'accounts', component: AccountsComponent, data: {title: 'Accounts'} },
  { path: 'addaccount', component: AddAccountComponent, data: {title: 'Add Account'} },
  { path: 'updateaccount/:id', component: UpdateAccountComponent, data: {title: 'Update Account'} }, // Displays specific account for update
  { path: 'detail/:id', component: DetailsComponent, data: {title: 'Recruit Details'} }, // Displays specific recruit details page
  { path: 'addrecruit', component: AddRecruitComponent, data: {title: 'Add Recruit'} },
  { path: 'report/:id', component: ReportsComponent, data: {title: 'Report Details'} }, // Displays reports for specfic recruit
  { path: 'addreport', component: AddReportComponent, data: {title: 'Add Report'} },

  { path: '', redirectTo: '/about', pathMatch: 'full'} // ,
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
