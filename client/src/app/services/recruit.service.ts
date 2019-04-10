import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { RecruitSchema, PlayerReportSchema, GoalieReportSchema } from '../../models/recruit';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class RecruitService {
  private user: User;
  private authToken: any = null;
  tweets = [];
  private tweetsUpdated = new Subject<{tweets: any[]}>();

  // *** REMINDER - must change endpoint uri to host url for it to work
  // private uri = 'http://localhost:3000/api/';
  private uri = 'https://puckager.herokuapp.com/api/';
  private djangoUrl = 'https://puckager-crawler.herokuapp.com/twitter/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type, accept'
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

  public getPlayerTweets(playerName: string)  {

    const payLoad = {
      player_name: playerName
    };

    this.http.post<any>(this.djangoUrl, payLoad)
    .pipe(map(tweetData => {
      return {
        tweets: tweetData.map(tweet => {
          return {
            id: tweet.id,
            user: tweet.user,
            created_at: tweet.created_at,
            text: tweet.text,
            source: tweet.source
          };
        })
      };
    }))
    .subscribe(returnedTweetData => {
      this.tweets = [];
      returnedTweetData.tweets.map(tweet => {
        this.tweets.push(tweet);
      });
      this.tweetsUpdated.next({
        tweets: [...this.tweets],
      });
    });
  }

  getTweetUpdateListener() {
    return this.tweetsUpdated.asObservable();
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
