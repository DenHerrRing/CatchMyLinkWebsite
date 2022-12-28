import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AuthApiService} from "../../shared/api/auth-api.service";
import {UsersApiService} from "../../shared/api/users-api.service";
import {UserResponse} from "../../shared/models/api/responses/user.response";
import {ToastService} from "../../shared/services/toast.service";
import {ToastComponent} from "../../components/toast/toast.component";
import {LinksApiService} from "../../shared/api/links-api.service";
import {Router} from "@angular/router";
import {ApiResponseAlert} from "../../shared/models/alerts/api-response-alert";

@Component({
    selector: 'app-sign-up',
    standalone: true,
    imports: [CommonModule, FormsModule, ToastComponent],
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    newUser!: UserResponse

    loading: boolean = false;

    alerts: ApiResponseAlert[] = []

    constructor(private authService: AuthApiService,
                private usersApiService: UsersApiService,
                private linksApiService: LinksApiService,
                private toastService: ToastService,
                private router: Router) {
    }

    onClickSubmit(): void {

        if (this.newUser.username === undefined) {
            this.toastService.showErrorToast('Du musst ein Benutzernamen eingeben!')
            return
        }

        if (this.newUser.password === undefined) {
            this.toastService.showErrorToast('Du musst ein Passwort eingeben!')
            return
        }

        if (this.newUser.email === undefined) {
            this.toastService.showErrorToast('Du musst eine Email eingeben!')
            return
        }

        if (this.newUser.username.length < 4) {
            this.toastService.showErrorToast('Der Benutzername muss aus mindestens 4 Zeichen bestehen')
            return
        }

        if (this.newUser.password !== this.newUser.passwordConfirm) {
            this.toastService.showErrorToast('Die Passwörter stimmen nicht überein!')
            return
        }

        this.loading = true
        this.usersApiService.create(this.newUser).subscribe(
            () => {
                this.toastService.showSuccessToast('Dein Account wurde erstellt. Bitte melde dich an!')
                this.usersApiService.getVerification(this.newUser.email).subscribe(
                    () => {
                        this.loading = false
                        this.router.navigate(['login'], {queryParams: {'username': this.newUser.username}})
                    },
                    error => {
                        console.log(error)
                        this.loading = false
                    }
                )

                this.loading = false
            },
            error => {
                this.alerts = error.error.data
                this.toastService.showErrorToast(error.error.message)
                this.loading = false
            },
            () => this.loading = false
        )
    }

    ngOnInit(): void {
        this.newUser = new UserResponse();
    }
}
