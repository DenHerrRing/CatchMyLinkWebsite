import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppStorageService} from "../../shared/services/app-storage.service";
import {ClipboardModule} from "ngx-clipboard";
import {ToastService} from "../../shared/services/toast.service";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [CommonModule, ClipboardModule, RouterLink],
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    constructor(public appStorageService: AppStorageService,
                private toastService: ToastService) {
    }

    onClickCopyToClipboard(): void {
        this.toastService.showSuccessToast('Dein Link wurde in die Zwischenablage kopiert!')
    }

    getLinkForCopy(): string {
        return `https://catchmy.link/@${this.appStorageService.user.username}`
    }
}
