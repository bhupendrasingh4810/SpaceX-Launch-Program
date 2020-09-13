import { NgModule } from "@angular/core";

import { MissionCardComponent } from './component/mission-card/mission-card.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SidebarFilterComponent } from './component/sidebar-filter/sidebar-filter.component';
import { CommonModule } from '@angular/common';
import { directives } from './directives';

@NgModule({
    declarations: [
        MissionCardComponent,
        SidebarComponent,
        SidebarFilterComponent,
        ...directives
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        MissionCardComponent,
        SidebarComponent,
        SidebarFilterComponent,
        CommonModule,
        ...directives
    ]
})

export class SharedModule { }