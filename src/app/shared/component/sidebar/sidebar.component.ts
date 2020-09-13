import { Component } from "@angular/core";
import { Constants } from '../../constants/app-constants';

@Component({
    selector: 'app-sidebar-component',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    constant = Constants;
    constructor() { }
}