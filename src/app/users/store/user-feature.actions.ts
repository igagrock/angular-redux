import { createAction, props } from '@ngrx/store';
import { User } from '../user.modal';

/**
 * loadUsers action is used to inform NgRx effect to load the users from remote system
 */
export const loadUsers = createAction(
    '[users] load users'
);

/**
 * addUsers action is used to Inform store to add the users to existing state
 */
export const addUsers = createAction(
    '[users] add users',
    props<{ users: User[] }>()
);

/**
 * addUser action is used to inform store to add a user to existing users state
 */
export const addUser = createAction(
    '[users] add user',
    props<{ user: User }>()
)

/**
 * createUser action informs effects to save a user in data source
 */
export const createUser = createAction(
    '[users] add user',
    props<{ user: User }>()
)
