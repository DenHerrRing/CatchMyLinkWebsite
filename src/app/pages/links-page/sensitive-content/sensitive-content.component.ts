import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sensitive-content-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sensitive-content.component.html',
  styleUrls: ['./sensitive-content.component.css']
})
export class SensitiveContentComponent {
    @Input() showModal!: boolean
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()

    constructor() {
    }

    onClickCloseModal(): void {
        this.closeModal.emit(false)
    }
}
