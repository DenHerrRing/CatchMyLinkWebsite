import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AuthApiService} from "../../shared/api/auth-api.service";
import {UsersApiService} from "../../shared/api/users-api.service";
import {UserResponse} from "../../shared/models/api/responses/user.response";

@Component({
    selector: 'app-sign-up',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    newUser!: UserResponse

    loading: boolean = false;

    constructor(private authService: AuthApiService,
                private usersApiService: UsersApiService) {
    }

    onClickSubmit(): void {
        this.loading = true
        this.usersApiService.create(this.newUser).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => this.loading = false
        )
    }

    ngOnInit(): void {
        this.newUser = new UserResponse();
    }
}
