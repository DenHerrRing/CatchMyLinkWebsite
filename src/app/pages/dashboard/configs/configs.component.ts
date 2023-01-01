import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {LinksApiService} from "../../../shared/api/links-api.service";
import {AppStorageService} from "../../../shared/services/app-storage.service";
import {LinkData} from "../../../shared/models/link-data";
import {UserResponse} from "../../../shared/models/api/responses/user.response";
import {UsersApiService} from "../../../shared/api/users-api.service";
import {ToastService} from "../../../shared/services/toast.service";

@Component({
  selector: 'app-configs',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.css']
})
export class ConfigsComponent implements OnInit{
    linkData: LinkData = new LinkData()
    user!: UserResponse
    // TODO: Wenn der User geändert wird, muss dieser in UserResponse gespeichert werden! Genauso das Passwort, welches geändert wird!

    showLoading: boolean = false

    showChangePasswordButtonLoading: boolean = false
    constructor(private linksApiService: LinksApiService,
                private usersApiService: UsersApiService,
                private appStorageService: AppStorageService,
                private toastService: ToastService) {

    }

    onClickChangePassword(): void {
        this.showChangePasswordButtonLoading = true
        this.usersApiService.changePassword(this.user.email).subscribe(
            () => {
                this.toastService.showSuccessToast('Du hast eine Email erhalten, mit welcher du dein Password ändern / zurücksetzen kannst!')
                this.showChangePasswordButtonLoading = false
            },
            error => {
                console.log(error)
                this.showChangePasswordButtonLoading = false
            }
        )
    }

    onClickSaveUser():void {
        // TODO: Diese Funktionalität muss noch überdacht werden!
        return
        this.showLoading = true
        this.usersApiService.update(this.user).subscribe(
            userData => {
                console.log(userData)
                this.showLoading = false
            },
            error => {
                console.log('Error while update User:, ', error)
                this.showLoading = false
            }
        )
    }

    onClickSave(): void {
        this.showLoading = true
        this.linksApiService.update(this.appStorageService.linksId, this.linkData).subscribe(
            data => {
                this.linkData = data.data
                this.showLoading = false
            },
            error => {
                console.log(error)
                this.showLoading = false
            }
        )
        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
    }

    changeToggleStatus(newStatus: boolean): void {
        this.linkData.config.nsfw = newStatus
        this.onClickSave()
    }

    ngOnInit(): void {
        this.linksApiService.get(this.appStorageService.linksId).subscribe(
            data => {
                this.linkData = data
                console.log('Init: ', this.linkData)
            },
            error => console.log(error),
        )
        this.user = this.appStorageService.user
    }

}
