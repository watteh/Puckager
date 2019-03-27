import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruit-social',
  templateUrl: './recruit-social.component.html',
  styleUrls: ['./recruit-social.component.css']
})
export class RecruitSocialComponent implements OnInit {

  tweets = [
    {creator: 'David', date: 'May 4, 2019', url: 'http://www.davidtrafford.com'},
    {creator: 'David', date: 'May 4, 2019', url: 'davidtrafford.com'},
    {creator: 'David', date: 'May 4, 2019', url: 'davidtrafford.com'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
