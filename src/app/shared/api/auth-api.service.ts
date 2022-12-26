import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {AuthResponse} from "../models/api/responses/auth.response";

@Injectable({
    providedIn: 'root'
})
export class AuthApiService {
    dbUrl!: string

    constructor(private httpClient: HttpClient) {
        this.dbUrl = `${environment.dbUrl}/api/collections/${environment.dbUsers}`
    }

    authWithPassword(identity: string, password: string): Observable<AuthResponse> {
        return this.httpClient.post<AuthResponse>(`${this.dbUrl}/auth-with-password`, {identity, password})
    }

    authRefresh(): Observable<AuthResponse> {
        return this.httpClient.post<AuthResponse>(`${this.dbUrl}/auth-refresh`, {})
    }

    requestVerification(email: string): Observable<null> {
        return this.httpClient.post<null>(`${this.dbUrl}/request-verification`, {email})
    }
}
