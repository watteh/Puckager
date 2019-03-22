import { Component, OnInit } from '@angular/core';
import { RecruitSchema, PlayerReportSchema, GoalieReportSchema } from '../../../../models/recruit';

import { RecruitService } from '../../../services/recruit.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Recruit } from 'app/recruit-list/recruit/recuit.model';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
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
    });
  }

  onReportSubmit(): void {
    if (this.position) {
      this.rs.addGoalieReport(this.goalieReport, this.recruit).subscribe(data => {
        if (data.success) {
          console.log(data);
          this.flashMessage.show('Report has been added.', {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/recruits/detail/' + this.recruit._id]);
        } else {
          this.flashMessage.show('Report was not added.', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/recruits/detail' + this.recruit._id]);
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
          this.router.navigate(['/recruits/detail' + this.recruit._id]);
        }
      });
    }

  }

}
