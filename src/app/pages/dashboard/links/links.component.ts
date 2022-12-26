import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinkData} from "../../../shared/models/link-data";
import {AddLinkModalComponent} from "./add-link-modal/add-link-modal.component";
import {Link} from "../../../shared/models/link";
import {Social} from "../../../shared/models/social";
import {AddSocialModalComponent} from "./add-social-modal/add-social-modal.component";
import {LinksApiService} from "../../../shared/api/links-api.service";
import {AppStorageService} from "../../../shared/services/app-storage.service";

@Component({
    selector: 'app-links',
    standalone: true,
    imports: [CommonModule, AddLinkModalComponent, AddSocialModalComponent],
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
    linkData: LinkData = new LinkData()
    showAddLinkModal: boolean = false;
    showAddSocialModal: boolean = false;

    constructor(private linksApiService: LinksApiService,
                private appStorageService: AppStorageService) {
    }

    onClickAddLink(): void {
        this.showAddLinkModal = true;
    }

    onClickAddSocial(): void {
        this.showAddSocialModal = true;
    }

    onEmitCloseAddLinkModal(value: boolean): void {
        this.showAddLinkModal = value;
    }

    onEmitCloseAddSocialModal(value: boolean): void {
        this.showAddSocialModal = value;
    }

    onEmitSaveAddLinkModal(value: Link): void {
        console.log(value);
    }

    onEmitSaveAddSocialModal(value: Social): void {
        console.log(value);
    }

    getSocialUrl(preUrl: string, accountUrl: string): string {
        return `${preUrl}${accountUrl}`
    }

    ngOnInit(): void {
        console.log('LinksComponent - Links ID: ', this.appStorageService.linksId)
        this.linksApiService.get(this.appStorageService.linksId).subscribe(
            data => this.linkData = data,
            error => console.log(error)
        )
    }
}
