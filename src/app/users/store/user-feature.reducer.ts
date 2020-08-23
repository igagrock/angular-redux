import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UserFeatureActions from "./user-feature.actions";
import { User } from '../user.modal';


export interface State extends EntityState<User> {
    //can add additional properties here
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    //provide methods for entity adapter to fetch id
    selectId: (user: User) => user.id,
    //provide sortComparer incase the entity needs to sorted fetch selection
    sortComparer: (u1: User, u2: User) => u1.id > u2.id ? 1 : (u1.id < u2.id) ? -1 : 0
});

export const initialState: State = adapter.getInitialState();

const theReducer = createReducer(
    initialState,
    on(UserFeatureActions.addUsers, (state, { users }) => {
        return adapter.addMany(users, state)
    }),
    on(UserFeatureActions.addUser, (state, { user }) => {
        return adapter.addOne(user, state)
    })
);



/**
 * Note: The exported reducer function is necessary as function calls are not supported the View Engine AOT compiler. 
 * It is no longer required if you use the default Ivy AOT compiler (or JIT).
 */
export function UserFeatureReducer(state: State = initialState, action: Action) {
    return theReducer(state, action);
}


