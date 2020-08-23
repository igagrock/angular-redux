import { createReducer, on, Action } from '@ngrx/store';

import * as UserFeatureActions from "./user-feature.actions";
import { User } from '../user.modal';


export interface State {
    users: User[];
}

export const initialState: State = {
    users: null,
}

const theReducer = createReducer(
    initialState,
    on(UserFeatureActions.addUsers, (state, { users }) => ({
        ...state,
        users: [...users]
    })),
    on(UserFeatureActions.addUser, (state, { user }) => ({
        ...state,
        users: [...state.users, { ...user }]
    }))
);


/**
 * Note: The exported reducer function is necessary as function calls are not supported the View Engine AOT compiler. 
 * It is no longer required if you use the default Ivy AOT compiler (or JIT).
 */
export function UserFeatureReducer(state: State = initialState, action: Action) {
    return theReducer(state, action);
}