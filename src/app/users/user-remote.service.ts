import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.modal';
import { map, tap, take } from 'rxjs/operators';

const usersUrl = 'https://reqres.in/api/users';
@Injectable({
  providedIn: 'root'
})
export class UserRemoteService {


  constructor(private httpClient: HttpClient) { }


  /**
   * 1) fetch all the users from the remote server
   * 2) save the users array
   * 
   */
  users$ = this.httpClient.get<{ data: User[] }>(usersUrl)
    .pipe(
      map(response => response.data)
    );


  /** create a new user */
  createUser(user: User) {
    return this.httpClient.post<User>(usersUrl, user);
    // .pipe(
    //   take(1)
    // )
  }


}
