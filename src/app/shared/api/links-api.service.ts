import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {UserResponse} from "../models/api/responses/user.response";
import {LinkData} from "../models/link-data";

@Injectable({
    providedIn: 'root'
})
export class LinksApiService {
    dbUrl!: string

    constructor(private httpClient: HttpClient) {
        this.dbUrl = `${environment.dbUrl}/api/collections/${environment.dbCollection}/records`
    }

    get(user: UserResponse): Observable<any> {
        return this.httpClient.get<UserResponse>(`${this.dbUrl}/${user.id}`)
    }

    create(user: UserResponse, linkData: LinkData): Observable<any> {
        return this.httpClient.post<UserResponse>(this.dbUrl, {id: user.id, user, data: linkData})
    }

    update(user: UserResponse, linkData: LinkData): Observable<any> {
        return this.httpClient.patch<UserResponse>(`${this.dbUrl}/${user.id}`, {id: user.id, user, data: linkData})
    }
}
