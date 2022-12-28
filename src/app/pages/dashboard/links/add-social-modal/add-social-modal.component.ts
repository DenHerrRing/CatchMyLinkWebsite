import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Social} from "../../../../shared/models/social";
import {FormsModule} from "@angular/forms";
import {IconService} from "../../../../shared/services/icon.service";
import {SocialIcon} from "../../../../shared/models/social-icon";

@Component({
    selector: 'app-add-social-modal',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './add-social-modal.component.html',
    styleUrls: ['./add-social-modal.component.css']
})
export class AddSocialModalComponent {
    @Input() showModal: boolean = false
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
    @Output() save: EventEmitter<Social> = new EventEmitter<Social>()

    showDetails: boolean = false

    newSocial: Social = new Social()

    constructor(public socialIcons: IconService) {
        console.log(socialIcons.getSocialIcons())
    }

    onClickSelectIcon(icon: SocialIcon): void {
        this.newSocial.iconUrl = icon.iconUrl
        this.newSocial.iconColor = icon.iconColor
        this.newSocial.name = icon.name
        this.newSocial.preUrl = icon.preUrl
        this.newSocial.placeholder = icon.placeholder
        this.onClickNext()
    }

    onClickCloseModal(): void {
        this.newSocial = new Social()
        this.showDetails = false
        this.showModal = false
        this.closeModal.emit(false)
    }

    onClickNext(): void {
        this.showModal = false
        this.showDetails = true
    }

    onClickBack(): void {
        this.showModal = true
        this.showDetails = false
    }

    onClickSave(social: Social): void {
        this.save.emit(social)
        this.onClickCloseModal()
    }
}
