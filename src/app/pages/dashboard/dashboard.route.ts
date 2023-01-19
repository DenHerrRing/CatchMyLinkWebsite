import {Route} from "@angular/router";
import {LinksComponent} from "./links/links.component";
import {DesignComponent} from "./design/design.component";
import {StatsComponent} from "./stats/stats.component";
import {ConfigsComponent} from "./configs/configs.component";

export const DASHBOARD_ROUTES: Route[] = [
    {path: 'links', component: LinksComponent},
    {path: 'design', component: DesignComponent},
    {path: 'stats', component: StatsComponent},
    {path: 'config', component: ConfigsComponent},
    {path: '**', redirectTo: 'links'},
]
