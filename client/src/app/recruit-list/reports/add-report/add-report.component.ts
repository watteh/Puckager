import { Component, OnInit } from '@angular/core';
import { RecruitSchema, PlayerReportSchema, GoalieReportSchema } from '../../../../models/recruit';

import { RecruitService } from '../../../services/recruit.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'models/user';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  title: string;
  recruit: RecruitSchema;
  position: boolean;
  edit: boolean;
  current: User;

  playerReport: PlayerReportSchema;
  goalieReport: GoalieReportSchema;

  constructor(private activatedRoute: ActivatedRoute, private rs: RecruitService, private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.recruit = new RecruitSchema();
    this.playerReport = new PlayerReportSchema();
    this.goalieReport = new GoalieReportSchema();
    this.current = JSON.parse(localStorage.getItem('user'));

    this.activatedRoute.params.subscribe(params => {
      if (this.title === 'Add Report') {
        this.recruit._id = params.id;
        this.edit = false;
      } else {
        this.recruit._id = params.recruitid;
        this.playerReport._id = params.reportid;
        this.goalieReport._id = params.reportid;
        this.edit = true;
      }
    });

    this.getRecruitDetails(this.recruit);
  }

  getRecruitDetails(recruit: RecruitSchema): void {
    this.rs.getRecruitDetails(recruit).subscribe(data => {
      this.recruit = data.recruit;
      if (data.recruit.position === 'Goalie') {
        this.position = true;
        if (this.title !== 'Add Report') {
          if (this.recruit.goalieReports === undefined) {
          } else {
            this.recruit.goalieReports.forEach((goalieReport) => {
              if (this.goalieReport._id === goalieReport._id) {
                this.goalieReport = goalieReport;
              }
            });
          }
        }
      } else {
        this.position = false;
        if (this.title !== 'Add Report') {
          if (this.recruit.playerReports === undefined) {
          } else {
            this.recruit.playerReports.forEach((playerReport) => {
              if (this.playerReport._id === playerReport._id) {
                this.playerReport = playerReport;
              }
            });
          }
        }
      }
    });
  }

  onReportSubmit(): void {
    this.playerReport.submittedBy = this.current.username;
    if (this.edit) {
      if (this.position) {
        this.rs.editGoalieReport(this.goalieReport, this.recruit).subscribe(data => {
          if (data.success) {
            console.log(data);
            this.flashMessage.show('Report has been edited.', {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/recruits/detail/' + this.recruit._id]);
          } else {
            this.flashMessage.show('Report was not edited.', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/recruits/detail/' + this.recruit._id]);
          }
        });
      } else {
        this.rs.editPlayerReport(this.playerReport, this.recruit).subscribe(data => {
          if (data.success) {
            console.log(data);
            this.flashMessage.show('Report has been edited.', {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/recruits/detail/' + this.recruit._id]);
          } else {
            this.flashMessage.show('Report was not edited.', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/recruits/detail/' + this.recruit._id]);
          }
        });
      }
    } else {
      if (this.position) {
        this.rs.addGoalieReport(this.goalieReport, this.recruit).subscribe(data => {
          if (data.success) {
            console.log(data);
            this.flashMessage.show('Report has been added.', {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/recruits/detail/' + this.recruit._id]);
          } else {
            this.flashMessage.show('Report was not added.', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/recruits/detail/' + this.recruit._id]);
          }
        });
      } else {
        this.rs.addPlayerReport(this.playerReport, this.recruit).subscribe(data => {
          if (data.success) {
            console.log(data);
            this.flashMessage.show('Report has been added.', {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/recruits/detail/' + this.recruit._id]);
          } else {
            this.flashMessage.show('Report was not added.', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/recruits/detail/' + this.recruit._id]);
          }
        });
      }
    }
  }
}
