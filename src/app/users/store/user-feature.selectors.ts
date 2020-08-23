import { createSelector } from '@ngrx/store';
import { AppState } from "src/app/store/app.reducer";
import { UserFeatureState } from './user-feature.reducer';

const selectUserFeature = (state: AppState) => state.userFeature;
export const selectUsers = createSelector(
    selectUserFeature,
    (state: UserFeatureState) => state.users
);

export const selectUser = createSelector(
    selectUserFeature,
    (state: UserFeatureState, props: { id: number }) => state.users.find(user => user.id === props.id)
)