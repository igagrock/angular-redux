import { createReducer, on, Action } from '@ngrx/store';

import * as UserFeatureActions from "./user-feature.actions";
import { User } from '../user.modal';


export interface UserFeatureState {
    users: User[];
    selectedUser: User
}

export const initialState: UserFeatureState = {
    users: null,
    selectedUser: null
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
    })),
    on(UserFeatureActions.selectUser, (state, { selectedUser }) => ({
        ...state,
        selectedUser: { ...selectedUser }
    }))
);


/**
 * Note: The exported reducer function is necessary as function calls are not supported the View Engine AOT compiler. 
 * It is no longer required if you use the default Ivy AOT compiler (or JIT).
 */
export function UserFeatureReducer(state: UserFeatureState = initialState, action: Action) {
    return theReducer(state, action);
}