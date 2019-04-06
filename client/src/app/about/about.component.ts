import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  isLoggedIn(): boolean {
    const result = this.user = JSON.parse(localStorage.getItem('user'));

    return result;
  }

}
