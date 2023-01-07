import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinkData} from "../../../shared/models/link-data";
import {UserResponse} from "../../../shared/models/api/responses/user.response";
import {LinksApiService} from "../../../shared/api/links-api.service";
import {AppStorageService} from "../../../shared/services/app-storage.service";
import {FormsModule} from "@angular/forms";
import {UsersApiService} from "../../../shared/api/users-api.service";
import {environment} from "../../../../environments/environment";
import {ToastService} from "../../../shared/services/toast.service";

@Component({
  selector: 'app-design',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
    linkData: LinkData = new LinkData()
    user!: UserResponse
    // TODO: Wenn der User geändert wird, muss dieser in UserResponse gespeichert werden! Genauso das Passwort, welches geändert wird!

    showLoading: boolean = false
    constructor(private linksApiService: LinksApiService,
                private appStorageService: AppStorageService,
                private usersApiService: UsersApiService,
                private toastService: ToastService) {

    }

    updateLinkPage(): void {
        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
    }

    onClickSave(): void{
        console.log(this.linkData.config.socialTop)
        this.showLoading = true
        this.linksApiService.update(this.appStorageService.linksId, this.linkData).subscribe(
            () => {
                this.showLoading = false
                this.updateLinkPage()
            },
            error => {
                console.log(error)
                this.showLoading = false
            }
        )

    }
    onClickSaveProfile(): void {
        this.showLoading = true

        this.linksApiService.update(this.appStorageService.linksId, this.linkData).subscribe(
            data => {
                this.linkData = data.data
                this.user.firstName = this.linkData.config.firstName
                this.user.lastName = this.linkData.config.lastName
                this.user.username = this.linkData.config.username
                this.usersApiService.update(this.user).subscribe(
                    userData => {
                        this.appStorageService.user = userData
                        this.showLoading = false
                        this.updateLinkPage()
                    }
                )
            },
            error => {
                console.log(error)
                this.showLoading = false
            }
        )
    }

    onChangeProfilePicture(event: any): void {
        // TODO: Es muss geprüft werden, ob der richtige Dateityp und die richtige Dateigröße gewählt wurde!
        console.log('Select new Picture: ', event.target.files)

        // const mimetypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/gif']
        let file = event.target.files[0]

        this.linkData.config.profilePicturePath = `${environment.dbUrl}/api/files/${environment.dbCollection}/${this.appStorageService.linksId}/${file.name}?thumb=150x150`

        let data = new FormData()
        data.append('profilePicture', file)

        this.linksApiService.uploadFile(this.appStorageService.linksId, data).subscribe(
            linksData =>{
                this.linkData.config.profilePicturePath = `${environment.dbUrl}/api/files/${environment.dbCollection}/${this.appStorageService.linksId}/${linksData.profilePicture}?thumb=150x150`
                this.linksApiService.update(this.appStorageService.linksId, this.linkData).subscribe(
                    () => {
                        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
                        this.toastService.showSuccessToast('Du hast dein Profilbild erfolgreich geändert!')
                    }, error => {
                        console.log(error)
                    }
                )
            }, error =>  {
                console.log(error)
            }
        )




    }

    ngOnInit(): void {
        this.linksApiService.get(this.appStorageService.linksId).subscribe(
            data => this.linkData = data,
            error => console.log(error)
        )
        this.user = this.appStorageService.user
    }
}
