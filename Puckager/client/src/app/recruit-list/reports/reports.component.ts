import { Component, OnInit } from '@angular/core';
import { RecruitSchema, PlayerReportSchema, GoalieReportSchema } from 'models/recruit';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitService } from 'app/services/recruit.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  title: string;
  recruit: RecruitSchema;
  position: boolean;
  playerReport: PlayerReportSchema;
  goalieReport: GoalieReportSchema;

  constructor(private activatedRoute: ActivatedRoute, private rs: RecruitService, private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.recruit = new RecruitSchema();
    this.playerReport = new PlayerReportSchema();
    this.goalieReport = new GoalieReportSchema();

    this.activatedRoute.params.subscribe(params => {
      this.recruit._id = params.recruitid;
      this.playerReport._id = params.reportid;
      this.goalieReport._id = params.reportid;

      this.getRecruitDetails(this.recruit);
    });
  }

  getRecruitDetails(recruit: RecruitSchema): void {
    this.rs.getRecruitDetails(recruit).subscribe(data => {
      this.recruit = data.recruit;
      if (data.recruit.position === 'Goalie') {
        this.position = true;
        if (this.recruit.goalieReports === undefined) {
        } else {
          this.recruit.goalieReports.forEach((goalieReport) => {
            if (this.goalieReport._id === goalieReport._id) {
              this.goalieReport = goalieReport;
            }
          });
        }
      } else {
        this.position = false;
        if (this.recruit.playerReports === undefined) {
        } else {
          this.recruit.playerReports.forEach((playerReport) => {
            if (this.playerReport._id === playerReport._id) {
              this.playerReport = playerReport;
            }
          });
        }
      }
      console.log(data);
    });
  }
}
