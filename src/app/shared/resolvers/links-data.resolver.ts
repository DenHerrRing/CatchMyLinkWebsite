import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {LinksApiService} from "../api/links-api.service";
import {AppStorageService} from "../services/app-storage.service";
import {LinksListResponse} from "../models/api/responses/links-list.response";

@Injectable({
    providedIn: 'root'
})
export class LinksDataResolver implements Resolve<LinksListResponse> {
    constructor(private linksApiService: LinksApiService,
                private appStorageService: AppStorageService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.linksApiService.getByUserId(localStorage.getItem('userId') as string)
    }
}
