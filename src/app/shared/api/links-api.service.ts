import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

    getByUserName(username: string): Observable<any> { // LinkData|null
        return this.httpClient.get<LinksListResponse>(`${this.dbUrl}?username=${username}&expand=user`).pipe(
            map(element => element.items),
            map(element => element.at(0)),
            map(element => element?.data)
        )
    }

    getByUserId(userId: string): Observable<LinksListResponse> {
        return this.httpClient.get<LinksListResponse>(`${this.dbUrl}?managed_by=${userId}`)
    }

    create(user: UserResponse, linkData: LinkData): Observable<LinkResponse> {
        return this.httpClient.post<LinkResponse>(this.dbUrl, {user: user.id, data: linkData, username: user.username})
    }

    update(linksDataId: string, linkData: LinkData): Observable<any> {
        return this.httpClient.patch<UserResponse>(`${this.dbUrl}/${linksDataId}`, {
            username: linkData.config?.username,
            data: linkData
        })
    }

    uploadFile(linksDataId: string, data: FormData): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.append('enctype', 'multipart/form-data');
        return this.httpClient.patch<UserResponse>(`${this.dbUrl}/${linksDataId}`, data, {headers: headers})
    }
}
