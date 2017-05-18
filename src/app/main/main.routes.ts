import { Routes } from '@angular/router';
import { MainComponent } from 'app/main/main.component';
// localhost:4200/main
export const mainRoutes: Routes = [
    {
        // localhost:4200/main
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            // localhost:4200/main/user
            { path: 'user', loadChildren: './user/user.module#UserModule' }
        ]
    }
]