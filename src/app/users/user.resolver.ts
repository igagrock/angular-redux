import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from './user.modal';
import { UserService } from './user.service';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | import("rxjs").Observable<User> | Promise<User> {
    console.log('resolver called ');
    const userId = route.paramMap.get('id');
    return this.userService.user$(+userId)
      .pipe(
        tap(user => {
          if (!user) {
            this.userService.loadUser(+userId)
          }
        }),
        take(1)
      )
  }

}