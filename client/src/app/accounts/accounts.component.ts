import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'app/services/auth.service';
import { UserService } from '../services/user.service';
import { RecruitService } from '../services/recruit.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  users: User[];
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private flashMessage: FlashMessagesService, private authService: AuthService,
              private userService: UserService, private rs: RecruitService) { }

  ngOnInit() {
    this.users = new Array<User>();

    this.displayUserList();
  }

  onDeleteClick(): void {
    if (!confirm('Are you sure?')) {
      this.router.navigate(['/accounts']);
    }
  }

  displayUserList(): void {
    this.userService.getList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.users = data.userList;
      } else {
        this.flashMessage.show('User must be logged in.', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
