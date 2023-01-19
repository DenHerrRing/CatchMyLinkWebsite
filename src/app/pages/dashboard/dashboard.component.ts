import {Component, OnInit} from '@angular/core';
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
@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, FooterComponent, NavigationComponent, MockPhoneComponent, LinksComponent, ToastComponent, DesignComponent, StatsComponent, ConfigsComponent, RouterLink, RouterOutlet, RouterLinkActive, QrCodeComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tabLinksActive: boolean = false;
    tabDesignActive: boolean = false;
    tabStatsActive: boolean = false;
    tabSettingsActive: boolean = false;

    showVerifyNotification: boolean = false;
    showWorkInProgressNotification: boolean = true;
    showLoadingButton: boolean = false;

    constructor(public appStorage: AppStorageService,
                private usersApiService: UsersApiService) {
    }

    onClickVerifyEmail(): void {
        this.showLoadingButton = true
        this.usersApiService.getVerification(this.appStorage.user.email).subscribe(
            () => {
                this.showVerifyNotification = true
                setTimeout(() => {
                    this.showVerifyNotification = false
                }, 6000);
                this.showLoadingButton = false
            }, () => {
                this.showLoadingButton = false
            }
        )
    }

    onClickWorkInProgress(): void {
        this.showWorkInProgressNotification = false
    }

    onClickLinksTab(): void {
        this.tabLinksActive = true;
        this.tabDesignActive = false;
        this.tabStatsActive = false;
        this.tabSettingsActive = false;
    }

    onClickDesignTab(): void {
        this.tabLinksActive = false;
        this.tabDesignActive = true;
        this.tabStatsActive = false;
        this.tabSettingsActive = false;
    }

    onClickStatsTab(): void {
        this.tabLinksActive = false;
        this.tabDesignActive = false;
        this.tabStatsActive = true;
        this.tabSettingsActive = false;
    }

    onClickSettingsTab(): void {
        this.tabLinksActive = false;
        this.tabDesignActive = false;
        this.tabStatsActive = false;
        this.tabSettingsActive = true;
    }

    onEmitCloseQrCodeModal(value: boolean) {
        this.appStorage.showQrCodeModal = value
    }

    ngOnInit(): void {
        this.tabLinksActive = true;
    }


}
