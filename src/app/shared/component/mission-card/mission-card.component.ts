import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-mission-card-component',
    templateUrl: './mission-card.component.html',
    styleUrls: ['./mission-card.component.scss']
})

export class MissionCardComponent {
    @Input() mission: any;

    defaultLaunchImage: string = 'assets/images/logo192.png';
    constructor() { }
}