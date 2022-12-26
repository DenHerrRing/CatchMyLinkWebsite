import {Injectable} from '@angular/core';
import {UserResponse} from "../models/api/responses/user.response";

@Injectable({
    providedIn: 'root'
})
export class AppStorageService {
    token: string = ''
    user: UserResponse = new UserResponse()

    constructor() {
    }

    loadLocalStorage(): void {
        this.token = localStorage.getItem('token') as string
        this.user = new UserResponse()
        this.user.collectionId = localStorage.getItem('userCollectionId') as string
        this.user.collectionName = localStorage.getItem('userCollectionName') as string
        this.user.updated = localStorage.getItem('userUpdated') as string
        this.user.created = localStorage.getItem('userCreated') as string
        this.user.id = localStorage.getItem('userId') as string
        this.user.username = localStorage.getItem('userUsername') as string
        this.user.email = localStorage.getItem('userEmail') as string
        this.user.emailVisibility = (localStorage.getItem('userEmailVisibility') === 'true') ? true : false
        this.user.verified = (localStorage.getItem('userVerified') === 'true') ? true : false
        this.user.firstName = localStorage.getItem('firstName') as string
        this.user.lastName = localStorage.getItem('lastName') as string
        this.user.profilPicturePath = localStorage.getItem('profilPicturePath') as string

        console.log('Load User from Local Storage: ', {token: this.token, user: this.user})
    }

    saveLocalStorage(): void {
        localStorage.setItem('token', this.token as string)
        localStorage.setItem('userId', this.user.id as string)
        localStorage.setItem('userCollectionId', this.user.collectionId as string)
        localStorage.setItem('userCollectionName', this.user.collectionName as string)
        localStorage.setItem('userUpdated', this.user.updated as string)
        localStorage.setItem('userCreated', this.user.created as string)
        localStorage.setItem('userUsername', this.user.username as string)
        localStorage.setItem('userEmail', this.user.email as string)
        localStorage.setItem('firstName', this.user.firstName as string)
        localStorage.setItem('lastName', this.user.lastName as string)
        localStorage.setItem('profilPicturePath', this.user.profilPicturePath as string)
        localStorage.setItem('userEmailVisibility', this.user.emailVisibility.toString())
        localStorage.setItem('userVerified', this.user.verified.toString())
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
        console.log('user is logged in: ', this.isTokenSet())
        return new Promise(async (resolve) => {
            if (this.isTokenSet()) {
                this.loadLocalStorage();
            }
            resolve(true);
        });
    }
}
