
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { RecruitListComponent } from './recruit-list/recruit-list.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'recruits', component: RecruitListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
