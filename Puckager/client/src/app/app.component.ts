import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  header: boolean;

  constructor(private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = new User();
    this.user = JSON.parse(localStorage.getItem('user'));

    this.header = true;
  }

  onLogoutClick(): void {
    // this.header = false;

    this.authService.logout().subscribe(data => {
      this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 5000});
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): boolean {
    // this.header = true;

    return this.authService.loggedIn();
  }
}
