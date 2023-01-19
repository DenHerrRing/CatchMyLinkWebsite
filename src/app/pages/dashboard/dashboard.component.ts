import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../components/footer/footer.component";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {MockPhoneComponent} from "../../components/mock-phone/mock-phone.component";
import {LinksComponent} from "./links/links.component";
import {ToastComponent} from "../../components/toast/toast.component";
import {AppStorageService} from "../../shared/services/app-storage.service";
import {DesignComponent} from "./design/design.component";
import {StatsComponent} from "./stats/stats.component";
import {ConfigsComponent} from "./configs/configs.component";
import {UsersApiService} from "../../shared/api/users-api.service";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {QrCodeComponent} from "../../components/qr-code-modal/qr-code.component";
import {ToastService} from "../../shared/services/toast.service";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, FooterComponent, NavigationComponent, MockPhoneComponent, LinksComponent, ToastComponent, DesignComponent, StatsComponent, ConfigsComponent, RouterLink, RouterOutlet, RouterLinkActive, QrCodeComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    showVerifyNotification: boolean = false;
    showWorkInProgressNotification: boolean = true;
    showLoadingButton: boolean = false;

    constructor(public appStorage: AppStorageService,
                private usersApiService: UsersApiService,
                private toastService: ToastService) {
    }

    onClickVerifyEmail(): void {
        this.showLoadingButton = true
        this.usersApiService.getVerification(this.appStorage.user.email).subscribe({
            next: () => {
                this.showVerifyNotification = true
                setTimeout(() => {
                    this.showVerifyNotification = false
                }, 6000);
                this.showLoadingButton = false
            },
            error: () => {
                this.toastService.showErrorToast('Deine Email konnte nicht validiert werden!')
                this.showLoadingButton = false
            }
        })
    }

    onClickWorkInProgress(): void {
        this.showWorkInProgressNotification = false
    }

    onEmitCloseQrCodeModal(value: boolean) {
        this.appStorage.showQrCodeModal = value
    }
}
