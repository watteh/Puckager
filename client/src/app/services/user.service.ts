import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authToken: any = null;

  // *** REMINDER - must change endpoint uri to host url for it to work
  // private uri = 'http://localhost:3000/api/';
  private uri = 'https://puckager.herokuapp.com/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.uri + 'accounts', this.httpOptions);
  }

  public getUser(user: User): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.uri + 'updateaccount/' + user._id, this.httpOptions);
  }

  public getUserDetails(user: User): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.uri + 'accountdetails/' + user._id, this.httpOptions);
  }

  public addUser(user: User): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.uri + 'addaccount', user, this.httpOptions);
  }

  public editUser(user: User): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.uri + 'updateaccount/' + user._id, user, this.httpOptions);
  }

  public deleteUser(user: User): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.uri + 'deleteaccount/' + user._id, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

}
