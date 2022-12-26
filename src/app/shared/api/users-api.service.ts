import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResponse} from "../models/api/responses/user.response";
import {UserRecord} from "../models/api/user-record";

@Injectable({
    providedIn: 'root'
})
export class UsersApiService {

    dbUrl!: string

    constructor(private httpClient: HttpClient) {
        this.dbUrl = `${environment.dbUrl}/api/collections/${environment.dbUsers}/records`
    }

    create(user: UserRecord): Observable<UserResponse> {
        return this.httpClient.post<UserResponse>(this.dbUrl, user)
    }

    update(user: UserRecord): Observable<UserResponse> {
        return this.httpClient.patch<UserResponse>(`${this.dbUrl}/${user.id}`, user)
    }
}
