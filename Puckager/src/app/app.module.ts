
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegistrationComponent } from './registration/registration.component';
import { RecruitListComponent } from './recruit-list/recruit-list.component';
import { RecruitComponent } from './recruit-list/recruit/recruit.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './recruit-list/details/details.component';
import { AddRecruitComponent } from './recruit-list/add-recruit/add-recruit.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { UpdateAccountComponent } from './accounts/update-account/update-account.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    RecruitListComponent,
    RecruitComponent,
    AboutComponent,
    DetailsComponent,
    AddRecruitComponent,
    AccountsComponent,
    AddAccountComponent,
    UpdateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
