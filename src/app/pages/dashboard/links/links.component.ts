import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinkData} from "../../../shared/models/link-data";
import {AddLinkModalComponent} from "./add-link-modal/add-link-modal.component";
import {Link} from "../../../shared/models/link";
import {Social} from "../../../shared/models/social";
import {AddSocialModalComponent} from "./add-social-modal/add-social-modal.component";
import {LinksApiService} from "../../../shared/api/links-api.service";
import {AppStorageService} from "../../../shared/services/app-storage.service";
import {EditLinkModalComponent} from "./edit-link-modal/edit-link-modal.component";
import {EditSocialModalComponent} from "./edit-social-modal/edit-social-modal.component";
import {
    CdkDrag,
    CdkDragDrop,
    CdkDragHandle,
    CdkDragPlaceholder,
    CdkDragPreview,
    CdkDropList,
    CdkDropListGroup,
    moveItemInArray
} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-links',
    standalone: true,
    imports: [CommonModule, AddLinkModalComponent, AddSocialModalComponent, EditLinkModalComponent, EditSocialModalComponent, CdkDropList, CdkDragPreview, CdkDrag, CdkDragHandle, CdkDropListGroup, CdkDragPlaceholder],
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
    linkData: LinkData = new LinkData()
    selectedLink: Link = new Link();
    selectedSocial: Social = new Social();
    showAddLinkModal: boolean = false;
    showEditLinkModal: boolean = false;
    showAddSocialModal: boolean = false;
    showEditSocialModal: boolean = false;

    constructor(private linksApiService: LinksApiService,
                private appStorageService: AppStorageService) {
    }

    hoverListItem(item: Link | Social):void {
        item.isHovered = ! item.isHovered
    }

    onDropLink(event: CdkDragDrop<Link[]>) {
        moveItemInArray(this.linkData.links, event.previousIndex, event.currentIndex);
        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
    }

    onDropStart(item: Link|Social) {
        item.isHovered = false
    }

    onDropSocial(event: CdkDragDrop<Social[]>) {
        moveItemInArray(this.linkData.socials, event.previousIndex, event.currentIndex);
        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
    }

    onClickAddLink(): void {
        this.showAddLinkModal = true;
    }

    onClickEditLink(link: Link): void {
        this.selectedLink = link;
        this.showEditLinkModal = true;
    }

    onClickDeleteLink(link: Link): void {
        this.linkData.links = this.linkData.links.filter(element => {
            return element.url !== link.url
        })
        this.linksApiService.update(this.appStorageService.linksId, this.linkData).subscribe(
            () => this.appStorageService.emitChangesOnLinkData.next(this.linkData)
        )
    }

    onClickEditSocial(social: Social): void {
        this.selectedSocial = social;
        this.showEditSocialModal = true;
    }

    onClickAddSocial(): void {
        this.showAddSocialModal = true;
    }

    onClickDeleteSocial(social: Social): void {
        this.linkData.socials = this.linkData.socials.filter(element => {
            return element.name !== social.name
        })
        this.linksApiService.update(this.appStorageService.linksId, this.linkData).subscribe(
            () => this.appStorageService.emitChangesOnLinkData.next(this.linkData)
        )
    }

    onEmitCloseAddLinkModal(value: boolean): void {
        this.showAddLinkModal = value;
    }

    onEmitCloseEditLinkModal(value: boolean): void {
        this.showEditLinkModal = value;
    }

    onEmitCloseAddSocialModal(value: boolean): void {
        this.showAddSocialModal = value;
    }

    onEmitCloseEditSocialModal(value: boolean): void {
        this.showEditSocialModal = value;
    }

    onEmitSaveAddLinkModal(value: Link): void {
        this.linkData.links.push(value)
        this.saveLinkSocialState(this.linkData)
        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
    }

    onEmitSaveEditLinkModal(): void {
        this.saveLinkSocialState(this.linkData)

        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
    }

    onEmitSaveAddSocialModal(value: Social): void {
        this.linkData.socials.push(value)
        this.saveLinkSocialState(this.linkData)

        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
    }

    onEmitSaveEditSocialModal(): void {
        this.saveLinkSocialState(this.linkData)

        this.appStorageService.emitChangesOnLinkData.next(this.linkData)
    }

    getSocialUrl(preUrl: string, accountUrl: string): string {
        return `${preUrl}${accountUrl}`
    }

    saveLinkSocialState(linksData: LinkData): void {
        this.linksApiService.update(this.appStorageService.linksId, linksData).subscribe(
            data => {
                this.linkData = data.data
            },
            error => console.log(error)
        )
    }

    ngOnInit(): void {
        this.linksApiService.get(this.appStorageService.linksId).subscribe(
            data => this.linkData = data,
            error => console.log(error)
        )
    }
}
