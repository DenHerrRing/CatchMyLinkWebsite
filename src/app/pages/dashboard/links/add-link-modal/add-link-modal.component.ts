import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Link} from "../../../../shared/models/link";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-add-link-modal',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './add-link-modal.component.html',
    styleUrls: ['./add-link-modal.component.css']
})
export class AddLinkModalComponent {
    @Input() showModal: boolean = false
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
    @Output() save: EventEmitter<Link> = new EventEmitter<Link>()

    newLink: Link = new Link()

    constructor() {
    }

    onClickCloseModal(): void {
        this.newLink = new Link()
        this.closeModal.emit(false)
    }

    onClickSave(link: Link): void {
        this.save.emit(link)
        this.onClickCloseModal()
    }
}
