import { createSelector } from '@ngrx/store';
import { AppState } from "src/app/store/app.reducer";
import * as fromUserFeature from './user-feature.reducer';

const selectUserFeature = (state: AppState) => state.userFeature;
export const selectUsers = createSelector(
    selectUserFeature,
    (state: fromUserFeature.State) => state.users
);

export const selectUser = createSelector(
    selectUserFeature,
    (state: fromUserFeature.State, props: { id: number }) => state.users.find(user => user.id === props.id)
)