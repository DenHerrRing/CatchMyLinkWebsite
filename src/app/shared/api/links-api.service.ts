import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {UserResponse} from "../models/api/responses/user.response";
import {LinkData} from "../models/link-data";
import {LinksListResponse} from "../models/api/responses/links-list.response";
import {LinkResponse} from "../models/api/responses/link.response";

@Injectable({
    providedIn: 'root'
})
export class LinksApiService {
    dbUrl!: string

    constructor(private httpClient: HttpClient) {
        this.dbUrl = `${environment.dbUrl}/api/collections/${environment.dbCollection}/records`
    }

    list(): Observable<LinksListResponse> {
        return this.httpClient.get<LinksListResponse>(`${this.dbUrl}`)
    }

    get(linksId: string): Observable<LinkData> {
        return this.httpClient.get<LinkResponse>(`${this.dbUrl}/${linksId}`).pipe(
            map(element => element.data)
        )
    }

    getByUserId(userId: string): Observable<LinksListResponse> {
        return this.httpClient.get<LinksListResponse>(`${this.dbUrl}?managed_by=${userId}`)
    }

    create(user: UserResponse, linkData: LinkData): Observable<any> {
        return this.httpClient.post<UserResponse>(this.dbUrl, {id: user.id, user, data: linkData})
    }

    update(user: UserResponse, linkData: LinkData): Observable<any> {
        return this.httpClient.patch<UserResponse>(`${this.dbUrl}/${user.id}`, {id: user.id, user, data: linkData})
    }
}
