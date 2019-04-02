import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  title: string;
  user: User;
  current: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.user = new User();
    this.current = new User();

    this.activatedRoute.params.subscribe(params => {
      this.user._id = params.id;
    });

    if (this.title === 'Update Account') {
      this.getUser(this.user);
    }

    this.current = JSON.parse(localStorage.getItem('user'));

  }

  getUser(user: User): void {
    this.userService.getUser(user).subscribe(data => {
      this.user = data.user;
    });
  }

  onAccountPageSubmit(): void {
    switch (this.title) {
      case 'Add Account':
      this.userService.addUser(this.user).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Account has been added.', {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/accounts']);
        } else {
          this.flashMessage.show('Account was not added.', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/accounts']);
        }
      });
      break;

      case 'Update Account':
      console.log(this.user);
      this.userService.editUser(this.user).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Account has been edited', {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/accounts']);
        } else {
          this.flashMessage.show('Account was not edited.', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/accounts']);
        }
      });
      break;
    }
  }

}
