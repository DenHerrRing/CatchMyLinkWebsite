import {UserResponse} from "./user.response";

export class AuthResponse {
    token!: string;
    record!: UserResponse;
}
