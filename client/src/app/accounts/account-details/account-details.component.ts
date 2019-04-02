import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  title: string;
  user: User;
  current: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.user = new User();
    this.current =  new User();

    this.activatedRoute.params.subscribe(params => {
      this.user._id = params.id;
    });

    this.getUserDetails(this.user);
    this.current = JSON.parse(localStorage.getItem('user'));
  }

  getUserDetails(user: User): void {
    this.userService.getUserDetails(user).subscribe(data => {
      this.user = data.user;
    });
  }

}
