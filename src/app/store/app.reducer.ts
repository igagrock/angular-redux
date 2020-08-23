import { UserFeatureState } from '../users/store/user-feature.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromUserFeature from '../users/store/user-feature.reducer';

export interface AppState {
    userFeature: UserFeatureState
}

export const AppActionReducerMap: ActionReducerMap<AppState> = {
    userFeature: fromUserFeature.UserFeatureReducer
}