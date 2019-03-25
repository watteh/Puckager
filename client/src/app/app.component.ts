import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  user: User;
  header: boolean;

  constructor(private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = new User();

    this.router.events
    .filter(e => e instanceof NavigationEnd)
    .forEach(e => {
      this.title = this.route.root.firstChild.snapshot.data.title;
      if (this.title === 'Login' || this.title === 'Register') {
        this.header = false;
      } else {
        this.header = true;
        this.user = JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  onLogoutClick(): void {
    this.authService.logout().subscribe(data => {
      this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 5000});
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): boolean {
    const result = this.user = JSON.parse(localStorage.getItem('user'));

    return result;
  }
}
