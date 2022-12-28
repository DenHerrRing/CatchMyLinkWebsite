import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinkData} from "../../../shared/models/link-data";
import {UserResponse} from "../../../shared/models/api/responses/user.response";
import {LinksApiService} from "../../../shared/api/links-api.service";
import {AppStorageService} from "../../../shared/services/app-storage.service";
import {FormsModule} from "@angular/forms";
import {UsersApiService} from "../../../shared/api/users-api.service";

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
                private usersApiService: UsersApiService) {

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
                    }
                )
            },
            error => {
                console.log(error)
                this.showLoading = false
            }
        )
        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
    }

    ngOnInit(): void {
        this.linksApiService.get(this.appStorageService.linksId).subscribe(
            data => this.linkData = data,
            error => console.log(error),
            () => console.log('ConfigComponent', this.linkData)
        )
        this.user = this.appStorageService.user
    }
}
