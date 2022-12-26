import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Social} from "../../../../shared/models/social";
import {FormsModule} from "@angular/forms";

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

    newSocial: Social = new Social()

    constructor() {
    }

    onClickCloseModal(): void {
        this.newSocial = new Social()
        this.closeModal.emit(false)
    }

    onClickSave(social: Social): void {
        this.save.emit(social)
        this.onClickCloseModal()
    }
}
