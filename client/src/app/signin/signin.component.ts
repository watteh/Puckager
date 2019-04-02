import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User;

  constructor(private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onLoginSubmit(): void {
    this.authService.authenticateUser(this.user).subscribe(data => {
      if (data.success) {
        console.log(data.user);
        if (data.user.accountType === 'None') {
          this.flashMessage.show('Account not yet validated', {cssClass: 'alert-danger', timeOut: 10000});
          this.router.navigate(['/about']);
        } else {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/about']);
        }
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/login']);
      }
    });

  }

}
