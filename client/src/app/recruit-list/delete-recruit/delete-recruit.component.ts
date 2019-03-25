import { Component, OnInit } from '@angular/core';
import { RecruitSchema } from '../../../models/recruit';
import { RecruitService } from '../../services/recruit.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-recruit',
  templateUrl: './delete-recruit.component.html',
  styleUrls: ['./delete-recruit.component.css']
})
export class DeleteRecruitComponent implements OnInit {
  title: string;
  recruit: RecruitSchema;

  constructor(private activatedRoute: ActivatedRoute, private rs: RecruitService,
              private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
      this.title = this.activatedRoute.snapshot.data.title;
      this.recruit = new RecruitSchema();

      this.activatedRoute.params.subscribe(params => {
          this.recruit._id = params.id;
      });

      this.deleteContact(this.recruit);
  }

  deleteContact(recruit: RecruitSchema): void {
      this.rs.deleteRecruit(recruit).subscribe(data => {
      if (data.success) {
          this.flashMessage.show('Recruit has been deleted.', {cssClass: 'alert-warning', timeOut: 3000});
          this.router.navigate(['/recruits']);
      } else {
          this.flashMessage.show('Recruit was not deleted.', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/recruits']);
      }
      });
  }

}
