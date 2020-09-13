import { Component, OnInit } from "@angular/core";
import { Constants } from 'src/app/shared/constants/app-constants';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../shared/store/reducers';
import { GetLaunchesAction } from 'src/app/shared/store/actions/launches.actions';
import { getLaunches } from 'src/app/shared/store/selectors/launches.selector';

@Component({
    selector: 'app-lauches-page',
    templateUrl: './launches.component.html',
    styleUrls: ['./launches.component.scss']
})

export class LaunchesComponent implements OnInit {
    constant = Constants;
    launches: any[];

    filters: any = { limit: 100 };
    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.getLaunches();
        this.store.pipe(select(getLaunches)).subscribe(launches => this.launches = launches);
    }

    getLaunches() {
        this.store.dispatch(new GetLaunchesAction(this.filters));
    }

    onSelectingLaunchYear(data: number) {
        this.filters = { ...this.filters, launch_year: data };
        this.getLaunches();
    }

    onSelectingLaunchSuccess(data: boolean) {
        this.filters = { ...this.filters, launch_success: data };
        this.getLaunches();
    }

    onSelectingLandingSuccess(data: boolean) {
        this.filters = { ...this.filters, land_success: data };
        this.getLaunches();
    }
}