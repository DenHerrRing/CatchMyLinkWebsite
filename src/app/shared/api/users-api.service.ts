import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResponse} from "../models/api/responses/user.response";

@Injectable({
    providedIn: 'root'
})
export class UsersApiService {

    dbUrl!: string

    constructor(private httpClient: HttpClient) {
        this.dbUrl = `${environment.dbUrl}/api/collections/${environment.dbUsers}/records`
    }

    create(user: UserResponse): Observable<UserResponse> {
        return this.httpClient.post<UserResponse>(this.dbUrl, user)
    }

    update(user: UserResponse): Observable<UserResponse> {
        return this.httpClient.patch<UserResponse>(`${this.dbUrl}/${user.id}`, user)
    }
}
