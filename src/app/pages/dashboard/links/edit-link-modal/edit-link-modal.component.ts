import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Link} from "../../../../shared/models/link";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-link-modal',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './edit-link-modal.component.html',
  styleUrls: ['./edit-link-modal.component.css']
})
export class EditLinkModalComponent {
    @Input() link!: Link
    @Input() showModal: boolean = false
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
    @Output() save: EventEmitter<Link> = new EventEmitter<Link>()

    constructor() {
    }

    onClickCloseModal(): void {
        this.link = new Link()
        this.closeModal.emit(false)
    }

    onClickSave(link: Link): void {
        this.save.emit(link)
        this.onClickCloseModal()
    }
}
