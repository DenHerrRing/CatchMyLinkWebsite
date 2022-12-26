import {Injectable} from '@angular/core';
import {UserRecord} from "../models/api/user-record";

@Injectable({
    providedIn: 'root'
})
export class AppStorageService {
    token: string = ''
    user: UserRecord = new UserRecord()

    constructor() {
    }

    loadLocalStorage(): void {
        this.token = localStorage.getItem('token') as string
        this.user = new UserRecord()
        this.user.id = localStorage.getItem('userId') as string
        this.user.username = localStorage.getItem('userUsername') as string
        this.user.email = localStorage.getItem('userEmail') as string
        this.user.emailVisibility = (localStorage.getItem('userEmailVisibility') === 'true') ? true : false
        this.user.verified = (localStorage.getItem('userVerified') === 'true') ? true : false

        console.log('Load User from Local Storage: ', {token: this.token, user: this.user})
    }

    saveLocalStorage(): void {
        localStorage.setItem('token', this.token as string)
        localStorage.setItem('userId', this.user.id as string)
        localStorage.setItem('userUsername', this.user.username as string)
        localStorage.setItem('userEmail', this.user.email as string)
        localStorage.setItem('userEmailVisibility', this.user.emailVisibility.toString())
        localStorage.setItem('userVerified', this.user.verified.toString())
    }

    async logout(): Promise<void> {
        try {
            this.token = '';
            this.user = new UserRecord();
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
        console.log('user is logged in: ', this.isTokenSet())
        return new Promise(async (resolve) => {
            if (this.isTokenSet()) {
                this.loadLocalStorage();
            }
            resolve(true);
        });
    }
}
