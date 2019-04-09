import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CustomFormsModule } from 'ng5-validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { RegistrationComponent } from './registration/registration.component';
import { RecruitListComponent } from './recruit-list/recruit-list.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './recruit-list/details/details.component';
import { AddRecruitComponent } from './recruit-list/add-recruit/add-recruit.component';
import { RecruitSocialComponent } from './recruit-list/recruit-social/recruit-social.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import { DeleteAccountComponent } from './accounts/delete-account/delete-account.component';
import { ReportsComponent } from './recruit-list/reports/reports.component';
import { AddReportComponent } from './recruit-list/reports/add-report/add-report.component';
import { DeleteRecruitComponent } from './recruit-list/delete-recruit/delete-recruit.component';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';
import { RecruitFilterPipe } from './pipes/recruit-filter.pipe';
import { SchedulerComponent } from './scheduler/scheduler/scheduler.component';


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
    ReportsComponent,
    AddReportComponent,
    DeleteRecruitComponent,
    PagenotfoundComponent,
    RecruitFilterPipe,
    AccountDetailsComponent,
    DeleteAccountComponent,
    SchedulerComponent,
    RecruitSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlashMessagesModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      },
    }),
    CustomFormsModule
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
