import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AuthApiService} from "../../shared/api/auth-api.service";
import {FormsModule} from "@angular/forms";
import {AppStorageService} from "../../shared/services/app-storage.service";
import {ToastComponent} from "../../components/toast/toast.component";
import {ToastService} from "../../shared/services/toast.service";
import {LinkData} from "../../shared/models/link-data";
import {LinksApiService} from "../../shared/api/links-api.service";
import {UsersApiService} from "../../shared/api/users-api.service";

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
                private linksApiService: LinksApiService,
                private usersApiService: UsersApiService,
                private toastService: ToastService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    onClickSubmit(): void {
        this.loading = true

        this.authService.authWithPassword(this.identity, this.password).subscribe({
            next: data => {
                if (data.record.links === '') {
                    // Create Links Data first time!
                    let linkData = new LinkData()
                    linkData.config.username = data.record.username
                    linkData.config.firstName = ''
                    linkData.config.lastName = ''
                    linkData.config.seoTitle = ''
                    linkData.config.seoDescription = ''
                    linkData.config.profilePicturePath = 'https://via.placeholder.com/150'
                    linkData.socials = []
                    linkData.links = []
                    this.linksApiService.create(data.record, linkData).subscribe(
                        linksApiData => {
                            data.record.links = linksApiData.id
                            this.usersApiService.addLinks(data.record.id, linksApiData.id, data.token).subscribe(
                                () => {
                                    this.appStorageService.token = data.token
                                    this.appStorageService.user = data.record
                                    this.appStorageService.linksId = data.record.links as string
                                    this.appStorageService.userId = data.record.id
                                    localStorage.setItem('token', data.token)
                                    this.loading = false
                                    this.router.navigate(['dashboard'])
                                },
                                error => {
                                    this.toastService.showErrorToast(error.error.message)
                                }
                            )
                        },
                        error => {
                            this.toastService.showErrorToast(error.error.message)
                        }
                    )
                } else {
                    this.appStorageService.token = data.token
                    this.appStorageService.user = data.record
                    this.appStorageService.linksId = data.record.links as string
                    this.appStorageService.userId = data.record.id
                    localStorage.setItem('token', data.token)
                    this.loading = false
                    this.router.navigate(['dashboard'])
                }
            },
            error: error => {
                this.toastService.showErrorToast(error.error.message)
                this.loading = false
            }
        })
    }

    ngOnInit(): void {
        this.identity = '';
        this.password = '';
        this.route.queryParams.subscribe((params) => {
            this.identity = params['username']
        })
    }
}
