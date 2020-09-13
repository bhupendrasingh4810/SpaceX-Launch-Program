import { NgModule } from "@angular/core";
import { LaunchesComponent } from './launches.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [LaunchesComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LaunchesComponent
            }
        ]),
        SharedModule
    ],
    exports: [RouterModule]
})

export class LaunchesModule { }