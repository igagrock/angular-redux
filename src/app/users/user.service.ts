import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as UserFeatureActions from './store/user-feature.actions';
import * as UserFeatureSelectors from './store/user-feature.selectors';
import { User } from './user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users$ = this.store.pipe(select(UserFeatureSelectors.selectUsers));
  user$ = (id: number) => this.store.pipe(select(UserFeatureSelectors.selectUser, { id: id }));
  createUser$ = (user: User) => this.store.dispatch(UserFeatureActions.createUser({ user: user }));

  constructor(
    private store: Store<AppState>
  ) {

    //load users from remote server by informating effects
    this.store.dispatch(UserFeatureActions.loadUsers());

  }
}
