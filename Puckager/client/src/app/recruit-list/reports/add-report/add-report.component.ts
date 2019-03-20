import { Component, OnInit } from '@angular/core';
import { PlayerReportSchema } from '../../../../models/recruit';
import { GoalieReportSchema } from '../../../../models/recruit';
import { RecruitSchema } from '../../../../models/recruit';

import { RecruitService } from '../../../services/recruit.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

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
    this.recruit.goalieReports[0] = this.goalieReport;
    this.recruit.playerReports[0] = this.playerReport;
    this.rs.addReport(this.recruit).subscribe(data => {
        if (data.success) {

          this.flashMessage.show('Report has been added.', {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/recruits']);
        } else {
          this.flashMessage.show('Report was not added.', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/recruits']);
        }
      });
  }

}
