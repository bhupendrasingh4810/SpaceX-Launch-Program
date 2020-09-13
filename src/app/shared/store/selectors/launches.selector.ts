import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLaunches from '../reducers/launches.reducer';

export const getLaunchState = createFeatureSelector<fromLaunches.LaunchesState>('launches');


export const getLaunches = createSelector(
    getLaunchState,
    ({ launches }) => launches
);