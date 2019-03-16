import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecruitService {

  uri = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  addRecruit(firstName, lastName, contactnumber, emailAddress, birthYear, graduationYear,
             currentTeam, jerseynumber, position, mothersName, fathersName, status, dateAdded) {
    const obj = {
      firstName,
      lastName,
      contactnumber,
      emailAddress,
      birthYear,
      graduationYear,
      currentTeam,
      jerseynumber,
      position,
      mothersName,
      fathersName,
      status,
      dateAdded
    };
    console.log(obj);
    this.http.post(`${this.uri}/addrecruit`, obj)
        .subscribe(res => console.log('Done'));
  }

  getRecruits() {
    return this.http.get(`${this.uri}/recruits`);
  }
}
