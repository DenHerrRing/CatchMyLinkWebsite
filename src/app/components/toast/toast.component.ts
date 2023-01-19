import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Toast} from "../../shared/models/toast";
import {ToastService} from "../../shared/services/toast.service";
import {ToastsEnum} from "../../shared/models/enums/toasts.enum";

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css']
})
export class ToastComponent {
    toasts?: Toast[];

    ToastsEnum = ToastsEnum

    constructor(private toastService: ToastService) {
        this.toastService.getToasts().subscribe(toasts => this.toasts = toasts)
    }
}
