import { ActionReducerMap } from '@ngrx/store';
import * as fromLaunches from './launches.reducer';

export interface AppState {
    launches: fromLaunches.LaunchesState;
}

export const reducers: ActionReducerMap<AppState> = {
    launches: fromLaunches.reducer
};