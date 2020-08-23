import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserRemoteService } from './user-remote.service';
import { User } from './user.modal';
import { UserService } from './user.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  sub: SubscriptionLike;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.sub = this.userService.users$.subscribe(
      users => console.log('users in subscription = ', users)
    );
  }

  newUser() {
    // const user: User = {
    //   id: 2000,
    //   avatar: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
    //   first_name: 'modified user first',
    //   last_name: 'modified user last',
    //   email: 'modified@user.com'
    // }

    // this.userService.createUser(user).subscribe(
    //   user => this.userService.users.push(user)
    // );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
