import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSegment} from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent),
        loadChildren: () => import('./pages/dashboard/dashboard.route').then(mod => mod.DASHBOARD_ROUTES)
    },
    {path: 'login', loadComponent: () => import('./pages/login/login.component').then(mod => mod.LoginComponent)},
    {path: 'signup', loadComponent: () => import('./pages/sign-up/sign-up.component').then(mod => mod.SignUpComponent)},
    {
        matcher: (url) => {
            if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
                return {
                    consumed: url,
                    posParams: {
                        username: new UrlSegment(url[0].path.slice(1), {})
                    }
                };
            }

            return null;
        },
        loadComponent: () => import('./pages/links-page/links-page.component').then(mod => mod.LinksPageComponent)
    },
    {path: '**', redirectTo: 'dashboard'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
