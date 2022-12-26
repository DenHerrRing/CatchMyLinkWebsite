import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {AuthApiService} from "../../shared/api/auth-api.service";
import {FormsModule} from "@angular/forms";
import {AppStorageService} from "../../shared/services/app-storage.service";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
    loading: boolean = false
    identity: string = ''
    password: string = ''

    constructor(private authService: AuthApiService,
                private appStorageService: AppStorageService,
                private router: Router) {
    }

    onClickSubmit(): void {
        this.loading = true
        this.authService.authWithPassword(this.identity, this.password).subscribe(
            data => {
                this.appStorageService.token = data.token
                this.appStorageService.user = data.record
                this.appStorageService.saveLocalStorage()
                this.loading = false
                this.router.navigate(['dashboard'])
            },
            error => console.log(error),
            () => this.loading = false
        )
    }

    ngOnInit(): void {
        this.identity = '';
        this.password = '';
    }
}
