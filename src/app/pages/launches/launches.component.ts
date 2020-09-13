import { Component } from "@angular/core";
import { Constants } from 'src/app/shared/constants/app-constants';

@Component({
    selector: 'app-lauches-page',
    templateUrl: './launches.component.html',
    styleUrls: ['./launches.component.scss']
})

export class LaunchesComponent {
    constant = Constants;
    launches: any[];
    constructor() { }
}