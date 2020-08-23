import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { tap, map } from 'rxjs/operators';
import { UserFeatureState } from './store/user-feature.reducer';
import * as UserFeatureActions from './store/user-feature.actions'
import { AppState } from '../store/app.reducer';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users$ = this.store.select('userFeature').pipe(map(state => state.users));

  constructor(
    private store: Store<AppState>
  ) {

    //load users from remote server by informating effects
    this.store.dispatch(UserFeatureActions.loadUsers());

  }
}
