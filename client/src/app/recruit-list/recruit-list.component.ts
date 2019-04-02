import { Component, OnInit } from '@angular/core';
import { RecruitSchema } from '../../models/recruit';
import { RecruitService } from '../services/recruit.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { AngularFontAwesomeComponent } from 'angular-font-awesome';

@Component({
  selector: 'app-recruit-list',
  templateUrl: './recruit-list.component.html',
  styleUrls: ['./recruit-list.component.css']
})
export class RecruitListComponent implements OnInit {
    selectedPosition;
    positions: Array<object> = [
      { name: 'Forward' },
      { name: 'Defenceman' },
      { name: 'Goalie' }
    ];
    birthYear;
    name;

    recruits: RecruitSchema[];
    recruit: RecruitSchema;

  constructor(private activatedRoute: ActivatedRoute, private rs: RecruitService,
              private router: Router, private flashMessage: FlashMessagesService,
              private authService: AuthService) { }

  mobile = false;

  ngOnInit() {
    this.recruits = new Array<RecruitSchema>();

    this.displayRecruitList();

    if (window.screen.width <= 1024) {
      this.mobile = true;
    }
  }

  onDeleteClick(): void {
    if (!confirm('Are you sure?')) {
      this.router.navigate(['/recruits']);
    }
  }

  displayRecruitList(): void {
    this.rs.getList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.recruits = data.recruitList;
      } else {
        this.flashMessage.show('User must be logged in.', {
          cssClass: 'alert-danger',
          timeOut: 3000
        });
      }
    });
  }

  onSocialClick(firstName: string, lastName: string) {
    const payLoad = firstName + ' ' + lastName + ' hockey' ;
    console.log(payLoad);
    this.rs.getPlayerTweets(payLoad);
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
