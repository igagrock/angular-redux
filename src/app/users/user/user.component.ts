import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.modal';
import { UserRemoteService } from '../user-remote.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    public userService: UserRemoteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
      )
      .subscribe(id => {
        this.user = { ...this.userService.users.find(user => user.id === +id) };
      }
      );
  }

}
