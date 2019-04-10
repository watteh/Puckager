import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl, ValidatorFn } from '@angular/forms';
import { RecruitService } from '../../services/recruit.service';
import { RecruitSchema } from '../../../models/recruit';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-recruit',
  templateUrl: './add-recruit.component.html',
  styleUrls: ['./add-recruit.component.css']
})
export class AddRecruitComponent implements OnInit {
  title: string;
  recruit: RecruitSchema;

  constructor(private activatedRoute: ActivatedRoute, private rs: RecruitService, private router: Router,
              private flashMessage: FlashMessagesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.recruit = new RecruitSchema();

    this.activatedRoute.params.subscribe(params => {
      this.recruit._id = params.id;
    });

    if (this.title === 'Update Recruit') {
      this.getRecruit(this.recruit);
    }
  }

  getRecruit(recruit: RecruitSchema): void {
    this.rs.getRecruit(recruit).subscribe(data => {
      this.recruit = data.recruit;
    });
  }

onDetailsPageSubmit(): void {
      switch (this.title) {
        case 'Add Recruit':
        this.rs.addRecruit(this.recruit).subscribe(data => {
          if (data.success) {
            this.flashMessage.show('Recruit has been added.', {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/recruits']);
          } else {
            this.flashMessage.show('Recruit was not added.', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/recruits']);
          }
        });
        break;

        case 'Update Recruit':
        console.log(this.recruit);
        this.rs.editRecruit(this.recruit).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/recruits']);
          } else {
            this.flashMessage.show('Recruit was not edited.', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/recruits']);
          }
        });
        break;
      }
  }
}
