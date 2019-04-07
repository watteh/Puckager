import { Component, OnInit } from '@angular/core';
import { RecruitSchema } from '../../../models/recruit';
import { PlayerReportSchema } from '../../../models/recruit';
import { GoalieReportSchema } from '../../../models/recruit';

import { RecruitService } from '../../services/recruit.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'models/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title: string;
  recruit: RecruitSchema;
  position: boolean;

  user: User;

  playerReports: PlayerReportSchema[];
  playerReport: PlayerReportSchema;

  goalieReports: GoalieReportSchema[];
  goalieReport: GoalieReportSchema;

  constructor(private activatedRoute: ActivatedRoute, private rs: RecruitService, private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.recruit = new RecruitSchema();

    this.user = JSON.parse(localStorage.getItem('user'));

    this.playerReports = new Array<PlayerReportSchema>();
    this.goalieReports = new Array<GoalieReportSchema>();

    this.activatedRoute.params.subscribe(params => {
      this.recruit._id = params.id;
    });

    this.getRecruitDetails(this.recruit);
  }

  getRecruitDetails(recruit: RecruitSchema): void {
    this.rs.getRecruitDetails(recruit).subscribe(data => {
      this.recruit = data.recruit;
      if (data.recruit.position === 'Goalie') {
        this.position = true;
      } else {
        this.position = false;
      }
      this.playerReports = data.recruit.playerReports;
      this.goalieReports = data.recruit.goalieReports;
      console.log(data);
    });
  }

  onDeleteClick(): void {
    if (!confirm('Are you sure?')) {
      this.router.navigate(['/recruits']);
    }
  }
}
