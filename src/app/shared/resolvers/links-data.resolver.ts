import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {LinksApiService} from "../api/links-api.service";
import {LinksListResponse} from "../models/api/responses/links-list.response";

@Injectable({
    providedIn: 'root'
})
export class LinksDataResolver implements Resolve<LinksListResponse> {
    constructor(private linksApiService: LinksApiService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.linksApiService.getByUserId(localStorage.getItem('userId') as string)
    }
}
