import {Injectable} from '@angular/core';
import {SocialIcon} from "../models/social-icon";

@Injectable({
    providedIn: 'root'
})
export class IconService {
    private socialIcons: SocialIcon[] = []

    constructor() {
        this.createSocialIcons()
    }

    getSocialIcons(): SocialIcon[] {
        return this.socialIcons
    }

    private createSocialIcons(): void {
        this.socialIcons.push(new SocialIcon(
            'Facebook',
            'https://www.facebook.com/',
            'https://www.facebook.com/',
            'assets/icons/brands/png-512/facebook-512x512-2285009.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'DEV',
            'https://dev.to/',
            'https://dev.to/',
            'assets/icons/brands/png-512/dev-512x512-2285030.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'GitHub',
            'https://github.com/',
            'https://github.com/',
            'assets/icons/brands/png-512/github-512x512-2284999.png',
            ''
        ))
    }
}
