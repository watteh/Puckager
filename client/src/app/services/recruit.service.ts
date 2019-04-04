import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RecruitSchema, PlayerReportSchema, GoalieReportSchema } from '../../models/recruit';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class RecruitService {
  private user: User;
  private authToken: any = null;

  // *** REMINDER - must change endpoint uri to host url for it to work
  //private uri = 'http://localhost:3000/api/';
  private uri = 'https://puckager.herokuapp.com/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  public getList(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.uri + 'recruits', this.httpOptions);
  }

  public getRecruit(recruit: RecruitSchema): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.uri + 'recruits/edit/' + recruit._id, this.httpOptions);
  }

  public getRecruitDetails(recruit: RecruitSchema): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.uri + 'recruits/detail/' + recruit._id, this.httpOptions);
  }

  public addRecruit(recruit: RecruitSchema): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.uri + 'recruits/addrecruit', recruit, this.httpOptions);
  }

  public editRecruit(recruit: RecruitSchema): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.uri + 'recruits/edit/' + recruit._id, recruit, this.httpOptions);
  }

  public deleteRecruit(recruit: RecruitSchema): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.uri + 'recruits/delete/' + recruit._id, this.httpOptions);
  }

  public addPlayerReport(playerReport: PlayerReportSchema, recruit: RecruitSchema): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.uri + 'addreport/' + recruit._id, playerReport, this.httpOptions);
  }

  public addGoalieReport(playerReport: GoalieReportSchema, recruit: RecruitSchema): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.uri + 'addreport/' + recruit._id, playerReport, this.httpOptions);
  }

  public editPlayerReport(playerReport: PlayerReportSchema, recruit: RecruitSchema): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.uri + 'editreport/' + recruit._id + '/' + playerReport._id, playerReport, this.httpOptions);
  }

  public editGoalieReport(playerReport: GoalieReportSchema, recruit: RecruitSchema): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.uri + 'editreport/' + recruit._id + '/' + playerReport._id, playerReport, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
