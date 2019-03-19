import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RecruitSchema } from '../../models/recruit';
// import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RecruitService {
  // private user: User;
  private uri = 'http://localhost:3000/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Oirigin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  public getList(): Observable<any> {
    return this.http.get<any>(this.uri + 'recruits', this.httpOptions);
  }

  public getRecruit(recruit: RecruitSchema): Observable<any> {
    return this.http.get<any>(this.uri + 'recruits/edit/' + recruit._id, this.httpOptions);
  }

  public getRecruitDetails(recruit: RecruitSchema): Observable<any> {
    return this.http.get<any>(this.uri + 'recruits/detail/' + recruit._id, this.httpOptions);
  }

  public addRecruit(recruit: RecruitSchema): Observable<any> {
    return this.http.post<any>(this.uri + 'recruits/addrecruit', recruit, this.httpOptions);
  }

  public editRecruit(recruit: RecruitSchema): Observable<any> {
    return this.http.post<any>(this.uri + 'recruits/edit/' + recruit._id, recruit, this.httpOptions);
  }

  public deleteRecruit(recruit: RecruitSchema): Observable<any> {
    return this.http.get<any>(this.uri + 'delete/' + recruit._id, this.httpOptions);
  }
}
