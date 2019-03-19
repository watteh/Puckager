import { Component, OnInit } from '@angular/core';
import { RecruitSchema } from '../../../models/recruit';
import { RecruitService } from '../../services/recruit.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title: string;
  recruit: RecruitSchema;

  constructor(private activatedRoute: ActivatedRoute, private rs: RecruitService, private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.recruit = new RecruitSchema();

    this.activatedRoute.params.subscribe(params => {
      this.recruit._id = params.id;
    });

    this.getRecruitDetails(this.recruit);

  }

  getRecruitDetails(recruit: RecruitSchema): void {
    this.rs.getRecruitDetails(recruit).subscribe(data => {
      this.recruit = data.recruit;
    });
  }

}
