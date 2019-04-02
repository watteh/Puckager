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
  private djangoUrl = 'https://packager-crawler.herokuapp.com/twitter';
  // private djangoUrl = 'https://puckager.herokuapp.com/twitter';

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

  public getPlayerTweets(playerName: string)  {
    // this.loadToken();

    // const djangoHttpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    //     'Access-Control-Allow-Methods': 'POST'
    //   })
    // };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With,' +
        'Content-Type, Accept, Accept-Encoding, Authorization, dnt, User-Agent, X-Csrftoken, X-Request-With',
        'Access-Control-Allow-Methods': 'POST'
      })
    };

    const payLoad = {
      player_name: playerName
    };

    console.log(this.httpOptions);
    this.http.post<any>(this.djangoUrl, payLoad, httpOptions)
    .pipe(map(tweetData => {
      return {
        tweets: tweetData.map(tweet => {
          return {
            id: tweet.id,
            user: tweet.user,
            created_at: tweet.created_at,
            text: tweet.text,
          };
        })
      };
    }))
    .subscribe(returnedTweetData => {
      returnedTweetData.tweets.map(tweet => {
        this.tweets.push(tweet);
      });
      // this.tweets = returnedTweetData.tweets;
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
