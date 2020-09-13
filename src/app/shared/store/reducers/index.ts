import { ActionReducerMap } from '@ngrx/store';
import * as fromLaunches from './launches.reducer';

export interface ReducerState {
    launches: fromLaunches.LaunchesState;
}

export const reducers: ActionReducerMap<ReducerState> = {
    launches: fromLaunches.reducer
};