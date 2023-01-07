import {Injectable} from '@angular/core';
import {UserResponse} from "../models/api/responses/user.response";
import {AuthApiService} from "../api/auth-api.service";
import {Subject} from "rxjs";
import {LinkData} from "../models/link-data";

@Injectable({
    providedIn: 'root'
})
export class AppStorageService {
    token: string = ''
    userId: string = ''
    linksId: string = ''
    user: UserResponse = new UserResponse()

    emitChangesOnLinkData: Subject<LinkData> = new Subject<LinkData>()

    showQrCodeModal: boolean = false

    constructor(private authService: AuthApiService) {
        console.log('Create AppStorageService')
    }

    async logout(): Promise<void> {
        try {
            this.token = '';
            this.user = new UserResponse();
            localStorage.clear();
        } catch (e) {
            console.log(e);
        } finally {
            window.location.reload();
        }
    }

    isTokenSet(): boolean {
        return !!localStorage.getItem('token');
    }

    load(): Promise<boolean> {
        return new Promise(async (resolve) => {
            if (this.isTokenSet()) {
                this.authService.authRefresh().subscribe(
                    data => {
                        this.token = data.token
                        this.user = data.record
                        this.linksId = data.record.links as string
                        this.userId = data.record.id
                        localStorage.setItem('token', data.token)
                        localStorage.setItem('linksId', data.record.links as string)
                        localStorage.setItem('userId', data.record.id as string)
                        resolve(true);
                    },
                    error => {
                        if (error.status === 401) {
                            this.logout()
                        }
                        console.log(error)
                    }
                )
            } else {
                resolve(false);
            }
        });
    }
}
