import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
    },
    {path: 'login', loadComponent: () => import('./pages/login/login.component').then(mod => mod.LoginComponent)},
    {path: 'signup', loadComponent: () => import('./pages/sign-up/sign-up.component').then(mod => mod.SignUpComponent)},
    { path: ':userid', loadComponent: () => import('./pages/links-page/links-page.component').then(mod => mod.LinksPageComponent)},
    {path: '**', redirectTo: 'dashboard'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
