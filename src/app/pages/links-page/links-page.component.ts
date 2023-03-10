import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {map, Observable} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {LinkData} from "../../shared/models/link-data";
import {AppStorageService} from "../../shared/services/app-storage.service";
import {UserResponse} from "../../shared/models/api/responses/user.response";
import {LinksApiService} from "../../shared/api/links-api.service";
import {SensitiveContentComponent} from "./sensitive-content/sensitive-content.component";
import {ToastService} from "../../shared/services/toast.service";

@Component({
    selector: 'app-links-page',
    standalone: true,
    imports: [CommonModule, SensitiveContentComponent],
    templateUrl: './links-page.component.html',
    styleUrls: ['./links-page.component.css']
})
export class LinksPageComponent implements OnInit {
    username$?: Observable<string>
    username!: string

    linkData: LinkData = new LinkData()

    user!: UserResponse

    showSensitiveModal: boolean = false

    constructor(private route: ActivatedRoute,
                private linksApiService: LinksApiService,
                private appStorageService: AppStorageService,
                private toastService: ToastService) {
        this.appStorageService.emitChangesOnLinkData.subscribe(
            next => {
                this.linkData = next
            }
        )
    }

    onCloseSensitiveModal(value: boolean) {
        this.showSensitiveModal = value
    }

    getSocialUrl(preUrl: string, accountUrl: string): string {
        return `${preUrl}${accountUrl}`
    }

    ngOnInit() {
        this.user = this.appStorageService.user

        this.route.params.subscribe(
            params => {
                this.username = params['username']
            }
        )

        this.username$ = this.route.paramMap
            .pipe(
                map((params: ParamMap) => params.get('username'))
            ) as Observable<string>;


        if (this.appStorageService.isTokenSet()) {
            this.linksApiService.get(this.appStorageService.linksId).subscribe(
                data => {
                    this.linkData = data
                },
                error => this.toastService.showErrorToast(error.error.message)
            )
        } else {
            this.linksApiService.getByUserName(this.username).subscribe(
                data => {
                    if (data) {
                        this.linkData = data
                        this.showSensitiveModal = data.config.nsfw
                    }
                },
                error => this.toastService.showErrorToast(error.error.message)
            )

        }

    }
}
