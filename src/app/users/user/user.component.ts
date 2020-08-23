import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.modal';
import { UserRemoteService } from '../user-remote.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, tap, switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.userService.user$(+id))
      ).subscribe(user => this.user = user);
  }

}
