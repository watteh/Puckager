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

  private tweetSub: Subscription;

  constructor(private rs: RecruitService) { }

  ngOnInit() {
    this.tweetSub = this.rs.getTweetUpdateListener().subscribe((tweetData) => {
      this.tweets = tweetData.tweets;
      console.log(this.tweets);
    });
  }

  // getPlayerTweets(): void {
  //   this.rs.getPlayerTweets(data).subscribe(data => {
  //     console.log(data);
  //   });
  // }

}
