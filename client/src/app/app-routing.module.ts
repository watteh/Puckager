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
import { RecruitSocialComponent } from './recruit-list/recruit-social/recruit-social.component';
import { ReportsComponent } from './recruit-list/reports/reports.component';
import { AddReportComponent } from './recruit-list/reports/add-report/add-report.component';
import { DeleteRecruitComponent } from './recruit-list/delete-recruit/delete-recruit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: SigninComponent, data: {title: 'Login'} },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent, data: {title: 'Register'} },
  { path: 'recruits', component: RecruitListComponent, data: {title: 'Recruits'}, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, data: {title: 'About Us'} },
  { path: 'accounts', component: AccountsComponent, data: {title: 'Accounts'} },
  { path: 'addaccount', component: AddAccountComponent, data: {title: 'Add Account'} },
  { path: 'updateaccount/:id', component: UpdateAccountComponent, data: {title: 'Update Account'} },
  // Displays specific account for update
  { path: 'recruits/detail/:id', component: DetailsComponent, data: {title: 'Recruit Details'}, canActivate: [AuthGuard] },
  // Displays specific recruit details page
  { path: 'recruits/social_search/:id', component: RecruitSocialComponent, data: {title: 'Twitter Posts'}, canActivate: [AuthGuard] },
  { path: 'recruits/edit/:id', component: AddRecruitComponent, data: {title: 'Update Recruit'}, canActivate: [AuthGuard] },
  // Displays specific recruit details page
  { path: 'recruits/addrecruit', component: AddRecruitComponent, data: {title: 'Add Recruit'}, canActivate: [AuthGuard] },
  // Displays reports for specfic recruit
  { path: 'report/:recruitid/:reportid', component: ReportsComponent, data: {title: 'Report Details'}, canActivate: [AuthGuard] },
  { path: 'addreport/:id', component: AddReportComponent, data: {title: 'Add Report'}, canActivate: [AuthGuard] },
  { path: 'recruits/delete/:id', component: DeleteRecruitComponent, data: {title: 'Delete Recruit'}, canActivate: [AuthGuard] },
  { path: 'editreport/:recruitid/:reportid', component: AddReportComponent, data: {title: 'Edit Report'}, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
