export class UserResponse {
    id!: string;
    collectionId!: string;
    collectionName!: string;
    created!: string;
    updated!: string;
    username!: string;
    firstName!: string;
    lastName!: string;
    profilPicturePath!: string;
    verified!: boolean;
    emailVisibility!: boolean;
    email!: string;
    password?: string;
    passwordConfirm?: string;
    links?: string;
}
