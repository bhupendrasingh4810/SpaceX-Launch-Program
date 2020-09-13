import { Component, Output, EventEmitter } from "@angular/core";
import { Constants } from '../../constants/app-constants';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';

@Component({
    selector: 'app-sidebar-component',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    @Output() selectLaunchYear: EventEmitter<any> = new EventEmitter();
    @Output() selectLaunchSuccess: EventEmitter<any> = new EventEmitter();
    @Output() selectLandingSuccess: EventEmitter<any> = new EventEmitter();

    constant = Constants;
    launchStartingYear: number = 2006;
    constructor(private store: Store<AppState>) { }

    getLaunchYears() {
        const currentYear = new Date().getFullYear();
        let launchYears = [];
        for (let i = this.launchStartingYear; i <= currentYear; i++)
            launchYears.push({ key: i, value: i });
        return launchYears;
    }

    getBooleanValues() {
        return [
            { key: this.constant.TRUE, value: true },
            { key: this.constant.FALSE, value: false }
        ];
    }

    onSelectingLaunchYear(launch_year: number) {
        this.selectLaunchYear.emit(launch_year);
    }

    onSelectingLaunchSuccess(launch_success: boolean) {
        this.selectLaunchSuccess.emit(launch_success);
    }

    onSelectingLandingSuccess(land_success: boolean) {
        this.selectLandingSuccess.emit(land_success);
    }
}