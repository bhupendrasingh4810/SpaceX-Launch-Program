import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-sidebar-filter-component',
    templateUrl: './sidebar-filter.component.html',
    styleUrls: ['./sidebar-filter.component.scss']
})

export class SidebarFilterComponent {
    @Input() heading: string;
    @Input() btnList: any[];

    @Output() onSelect: EventEmitter<any> = new EventEmitter();

    selectedValue: string;

    constructor() { }

    selectValue(data: any) {
        this.selectedValue = this.selectedValue === data.value ? null : data.value;
        this.onSelect.emit(this.selectedValue);
    }
}