import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const GET_LAUNCHES = '[Auth] Get Launches';
export const GET_LAUNCHES_SUCCESS = '[Auth] Get Launches Success';
export const GET_LAUNCHES_FAILURE = '[Auth] Get Launches Failure';

export class GetLaunchesAction implements Action {
    type = GET_LAUNCHES;
    constructor(public payload: object) { }
}

export class GetLaunchesSuccessAction implements Action {
    type = GET_LAUNCHES_SUCCESS;
    constructor(public payload: any) { }
}

export class GetLaunchesFailureAction implements Action {
    type = GET_LAUNCHES_FAILURE;
    constructor(public payload: HttpErrorResponse) { }
}

export type LaunchesActions = GetLaunchesAction | GetLaunchesSuccessAction | GetLaunchesFailureAction;
