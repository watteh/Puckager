import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  title: string;
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
              private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.user = new User();

    this.activatedRoute.params.subscribe(params => {
    this.user._id = params.id;
    });

    this.deleteUser(this.user);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Contact has been deleted.', {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/accounts']);
      } else {
        this.flashMessage.show('Contact was not deleted.', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/accounts']);
      }
    });
  }

}
