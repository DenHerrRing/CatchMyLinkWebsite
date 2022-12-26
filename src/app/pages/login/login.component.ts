import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {AuthApiService} from "../../shared/api/auth-api.service";
import {FormsModule} from "@angular/forms";
import {AppStorageService} from "../../shared/services/app-storage.service";
import {ToastComponent} from "../../components/toast/toast.component";
import {ToastService} from "../../shared/services/toast.service";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule, ToastComponent],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading: boolean = false
    identity: string = ''
    password: string = ''

    constructor(private authService: AuthApiService,
                private appStorageService: AppStorageService,
                private toastService: ToastService,
                private router: Router) {
    }

    onClickSubmit(): void {
        this.loading = true

        this.authService.authWithPassword(this.identity, this.password).subscribe(
            data => {
                this.appStorageService.token = data.token
                this.appStorageService.user = data.record
                this.appStorageService.linksId = data.record.links as string
                this.appStorageService.userId = data.record.id
                localStorage.setItem('token', data.token)
                this.loading = false
                this.router.navigate(['dashboard'])
            },
            error => {
                console.log(error)
                this.toastService.showErrorToast(error.error.message)
                this.loading = false
            }
        )
    }

    ngOnInit(): void {
        this.identity = '';
        this.password = '';
    }
}
