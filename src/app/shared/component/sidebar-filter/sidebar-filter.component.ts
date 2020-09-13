import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-sidebar-filter-component',
    templateUrl: './sidebar-filter.component.html',
    styleUrls: ['./sidebar-filter.component.scss']
})

export class SidebarFilterComponent {
    @Input() heading: string;
    @Input() btnList: any[];

    selectedValue: string;

    constructor() { }

    selectValue(data) {
        console.log(data);
        // onSelect(data.value);
    }
}