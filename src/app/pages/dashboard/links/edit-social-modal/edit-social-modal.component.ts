import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Social} from "../../../../shared/models/social";
import {IconService} from "../../../../shared/services/icon.service";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-edit-social-modal',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './edit-social-modal.component.html',
    styleUrls: ['./edit-social-modal.component.css']
})
export class EditSocialModalComponent {
    @Input() social: Social = new Social()
    @Input() showModal: boolean = false
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
    @Output() save: EventEmitter<Social> = new EventEmitter<Social>()

    constructor(public socialIcons: IconService) {
    }


    onClickCloseModal(): void {
        this.social = new Social()
        this.closeModal.emit(false)
    }

    onClickSave(social: Social): void {
        this.save.emit(social)
        this.onClickCloseModal()
    }
}
