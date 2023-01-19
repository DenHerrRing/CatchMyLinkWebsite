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
        this.dbUrl = `${environment.dbUrl}/api/collections/${environment.dbUsers}`
    }

    create(user: UserResponse): Observable<UserResponse> {
        return this.httpClient.post<UserResponse>(`${this.dbUrl}/records`, {
            email: user.email,
            username: user.username,
            password: user.password,
            passwordConfirm: user.passwordConfirm
        })
    }

    update(user: UserResponse): Observable<UserResponse> {
        return this.httpClient.patch<UserResponse>(`${this.dbUrl}/records/${user.id}`, user)
    }

    addLinks(userId: string, linksId: string, token: string): Observable<UserResponse> {
        return this.httpClient.patch<UserResponse>(`${this.dbUrl}/records/${userId}`, {links: linksId}, {headers: {'Authorization': token}})
    }

    getVerification(email: string): Observable<null> {
        return this.httpClient.post<null>(`${this.dbUrl}/request-verification`, {email: email})
    }

    changePassword(email: string): Observable<any> {
        return this.httpClient.post<any>(`${this.dbUrl}/request-password-reset`, {email: email})
    }
}
