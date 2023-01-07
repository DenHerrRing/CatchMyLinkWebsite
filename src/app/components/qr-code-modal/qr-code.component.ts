import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppStorageService} from "../../shared/services/app-storage.service";
import {QRCodeModule} from "angularx-qrcode";
import {SafeUrl} from "@angular/platform-browser";

@Component({
    selector: 'app-qr-code-modal',
    standalone: true,
    imports: [CommonModule, QRCodeModule],
    templateUrl: './qr-code.component.html',
    styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {
    @Input() showModal: boolean = false
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
    public myAngularxQrCode: string = "";
    public qrCodeDownloadLink: SafeUrl = "";

    constructor(public appStorage: AppStorageService) {
        this.myAngularxQrCode = `https://catchmy.link/@${this.appStorage.user.username}`
    }

    onChangeURL(url: SafeUrl) {
        this.qrCodeDownloadLink = url;
    }

    onClickCloseModal(): void {
        this.closeModal.emit(false)
    }


}
