import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../components/footer/footer.component";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {MockPhoneComponent} from "../../components/mock-phone/mock-phone.component";
import {LinksComponent} from "./links/links.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, FooterComponent, NavigationComponent, MockPhoneComponent, LinksComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tabLinksActive: boolean = false;
    tabDesignActive: boolean = false;
    tabStatsActive: boolean = false;
    tabSettingsActive: boolean = false;

    constructor() {
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

    ngOnInit(): void {
        this.tabLinksActive = true;
    }


}
