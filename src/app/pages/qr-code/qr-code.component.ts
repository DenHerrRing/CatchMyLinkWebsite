import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ToastComponent} from "../../components/toast/toast.component";
import {RouterLink} from "@angular/router";
import {AppStorageService} from "../../shared/services/app-storage.service";
import {UsersApiService} from "../../shared/api/users-api.service";

@Component({
  selector: 'app-qr-code',
  standalone: true,
    imports: [CommonModule, NavigationComponent, FooterComponent, ToastComponent, RouterLink],
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {

    constructor(public appStorage: AppStorageService,
                private usersApiService: UsersApiService) {
    }

}
