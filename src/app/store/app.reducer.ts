import { ActionReducerMap } from '@ngrx/store';
import * as fromUserFeature from '../users/store/user-feature.reducer';

export interface AppState {
    userFeature: fromUserFeature.State
}

export const AppActionReducerMap: ActionReducerMap<AppState> = {
    userFeature: fromUserFeature.UserFeatureReducer
}