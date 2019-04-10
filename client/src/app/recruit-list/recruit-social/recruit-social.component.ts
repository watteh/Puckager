import { Component, OnInit } from '@angular/core';
import { RecruitService } from 'app/services/recruit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recruit-social',
  templateUrl: './recruit-social.component.html',
  styleUrls: ['./recruit-social.component.css']
})
export class RecruitSocialComponent implements OnInit {

  tweets = [];

  constructor(private rs: RecruitService) { }

  ngOnInit() {
    this.rs.getTweetUpdateListener().subscribe((tweetData) => {
      this.tweets = tweetData.tweets;
      console.log(this.tweets);
    });
  }

  // linkify(text) {
  //   const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  //   return text.replace(urlRegex, (url) => {
  //       return '<a href="' + url + '">' + url + '</a>';
  //   });
  // }

  removeURLs(text) {
    text = text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    return text;
  }

}
