import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { RegistrationComponent } from './registration/registration.component';
import { RecruitListComponent } from './recruit-list/recruit-list.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './recruit-list/details/details.component';
import { AddRecruitComponent } from './recruit-list/add-recruit/add-recruit.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { UpdateAccountComponent } from './accounts/update-account/update-account.component';
import { ReportsComponent } from './recruit-list/reports/reports.component';
import { AddReportComponent } from './recruit-list/reports/add-report/add-report.component';
import { DeleteRecruitComponent } from './recruit-list/delete-recruit/delete-recruit.component';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
// import { AuthService } from './services/auth.service';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SigninComponent,
    RecruitListComponent,
    AboutComponent,
    DetailsComponent,
    AddRecruitComponent,
    AccountsComponent,
    AddAccountComponent,
    UpdateAccountComponent,
    ReportsComponent,
    AddReportComponent,
    DeleteRecruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
