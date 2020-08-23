import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects/';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserRemoteService } from '../user-remote.service';
import * as UserFeatureActions from './user-feature.actions';

@Injectable()
export class UserFeatureEffects {

    constructor(
        private action$: Actions,
        private userRemoteService: UserRemoteService
    ) { }


    loadUsers$ = createEffect(() => this.action$.pipe(
        ofType(UserFeatureActions.loadUsers),
        mergeMap(() => this.userRemoteService.users$
            .pipe(
                map(users => UserFeatureActions.addUsers({ users: users })),
                catchError((error) => of(error))
            )
        )
    ));

    addUser$ = createEffect(() => this.action$.pipe(
        ofType(UserFeatureActions.createUser),
        mergeMap((action) => this.userRemoteService.createUser(action.user)
            .pipe(
                map(user => UserFeatureActions.addUser({ user: user })),
                catchError((error) => of(error))
            )
        ),

    ));

    loadUser$ = createEffect(() => this.action$.pipe(
        ofType(UserFeatureActions.loadUser),
        mergeMap((action) => this.userRemoteService.user$(action.id)
            .pipe(
                tap(user => console.log('loadUser effect called => ', user)),
                map(user => UserFeatureActions.addUser({ user: user })),
                catchError((error) => of(error))
            )
        ),
    ));
}
