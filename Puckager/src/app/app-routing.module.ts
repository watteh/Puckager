
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { RecruitListComponent } from './recruit-list/recruit-list.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { UpdateAccountComponent } from './accounts/update-account/update-account.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'recruits', component: RecruitListComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'about', component: AboutComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'addaccount', component: AddAccountComponent },
  { path: 'updateaccount', component: UpdateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
