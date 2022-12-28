import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {LinksApiService} from "../../../shared/api/links-api.service";
import {AppStorageService} from "../../../shared/services/app-storage.service";
import {LinkData} from "../../../shared/models/link-data";
import {UserResponse} from "../../../shared/models/api/responses/user.response";

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
    constructor(private linksApiService: LinksApiService,
                private appStorageService: AppStorageService) {

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
            data => this.linkData = data,
            error => console.log(error),
            () => console.log('ConfigComponent', this.linkData)
        )
        this.user = this.appStorageService.user
    }

}
