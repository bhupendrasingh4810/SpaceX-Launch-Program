import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {
        path: 'launches',
        loadChildren: () => import('./pages/launches/launches.module').then(m => m.LaunchesModule)
    },
    {
        path: '',
        redirectTo: 'launches',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}