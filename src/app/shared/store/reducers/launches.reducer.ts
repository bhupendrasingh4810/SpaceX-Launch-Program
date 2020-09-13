import * as fromLaunchesActions from '../actions/launches.actions';

export interface LaunchesState {
    launches: any[];
    isLoading: boolean
}

const initialState: LaunchesState = {
    launches: undefined,
    isLoading: false
};

export function reducer(state: LaunchesState = initialState, action: fromLaunchesActions.LaunchesActions): LaunchesState {
    switch (action.type) {
        case fromLaunchesActions.GET_LAUNCHES: {
            return { ...state, isLoading: true };
        }
        case fromLaunchesActions.GET_LAUNCHES_SUCCESS: {
            return { ...state, isLoading: false, launches: action.payload };
        }
        default:
            return { ...state };
    }
}