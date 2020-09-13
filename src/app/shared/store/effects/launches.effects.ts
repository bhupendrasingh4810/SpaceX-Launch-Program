import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LaunchesServices } from '../../services/launches.service';
import * as fromLaunchesActions from '../actions/launches.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LaunchesEffects {
    constructor(private actions$: Actions, private launchesService: LaunchesServices) { }

    @Effect()
    getLaunches$ = this.actions$.pipe(
        ofType(fromLaunchesActions.GET_LAUNCHES),
        switchMap((action: fromLaunchesActions.GetLaunchesAction) => this.launchesService.getLaunches(action.payload).pipe(
            map(ret => new fromLaunchesActions.GetLaunchesSuccessAction(ret)),
            catchError(error => of(new fromLaunchesActions.GetLaunchesFailureAction(error)))
        ))
    );
}