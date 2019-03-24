import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;

  constructor(private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onRegisterSubmit(): void {
    this.authService.registerUser(this.user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('User has been registered.', {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/about']);
      } else {
        this.flashMessage.show('User was not registered.', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/registration']);
      }
    });
  }
}
