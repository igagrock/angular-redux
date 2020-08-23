import { createSelector } from '@ngrx/store';
import { AppState } from "src/app/store/app.reducer";
import * as userFeature from './user-feature.reducer';

//provides all the required selectors.
const { selectAll, selectEntities, selectIds, selectTotal } = userFeature.adapter.getSelectors();

const selectUserFeature = (state: AppState) => state.userFeature;
export const selectUsers = createSelector(
    selectUserFeature,
    selectAll
);

/** could have a better implementation instead of using existing state 
 * rather utilizing inbuild selectors provided in adapter */

export const selectUser = createSelector(
    selectUserFeature,
    (state: userFeature.State, props: { id: number }) => state.entities[props.id]
)