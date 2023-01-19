import {Injectable} from '@angular/core';
import {SocialIcon} from "../models/social-icon";

@Injectable({
    providedIn: 'root'
})
export class IconService {
    private readonly socialIcons: SocialIcon[] = []

    constructor() {
        this.createSocialIcons()
        this.socialIcons = this.socialIcons.sort((a, b) => (a.name < b.name) ? -1 : 1);
    }

    getSocialIcons(): SocialIcon[] {
        return this.socialIcons
    }


    private createSocialIcons(): void {
        this.socialIcons.push(new SocialIcon(
            'Facebook',
            'https://www.facebook.com/',
            'DenHerrRing',
            'assets/icons/brands/png-512/facebook-512x512-2285009.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'DEV',
            'https://dev.to/',
            'DenHerrRing',
            'assets/icons/brands/png-512/dev-512x512-2285030.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'GitHub',
            'https://github.com/',
            'DenHerrRing',
            'assets/icons/brands/png-512/github-512x512-2284999.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Discord',
            'discordapp.com/users/',
            'DenHerrRing',
            'assets/icons/brands/png-512/discord-512x512-2285027.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Ghost',
            'https://{account}.ghost.org/',
            'DenHerrRing',
            'assets/icons/brands/png-512/ghost-512x512-2285002.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'GitLab',
            'https://gitlab.com/',
            'DenHerrRing',
            'assets/icons/brands/png-512/gitlab-512x512-2284998.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Instagram',
            'https://www.instagram.com/',
            'DenHerrRing',
            'assets/icons/brands/png-512/instagram-512x512-2284970.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'LinkedIn',
            'https://www.linkedin.com/',
            'DenHerrRing',
            'assets/icons/brands/png-512/linkedin-512x512-2284952.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Medium',
            'https://medium.com/@',
            'DenHerrRing',
            'assets/icons/brands/png-512/medium-512x512-2284941.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Meetup',
            'https://www.meetup.com/members/',
            '214911037',
            'assets/icons/brands/png-512/meetup-512x512-2284940.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Patreon',
            'https://www.patreon.com/',
            'DenHerrRing',
            'assets/icons/brands/png-512/patreon-512x512-2284922.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'PayPal',
            'https://paypal.me/',
            'denhering',
            'assets/icons/brands/png-512/paypal-512x512-2284921.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'reddit',
            'https://www.reddit.com/user/',
            'DenHerrRing',
            'assets/icons/brands/png-512/reddit-512x512-2284905.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Spotify',
            'https://open.spotify.com/user/',
            'DenHerrRing',
            'assets/icons/brands/png-512/spotify-512x512-2284885.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'steam',
            'https://steamcommunity.com/id/',
            'DenHerrRing',
            'assets/icons/brands/png-512/steam-512x512-2284881.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Telegram',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/png-512/telegram-512x512-2284874.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'tiktok',
            'https://www.tiktok.com/@',
            'DenHerrRing',
            'assets/icons/brands/png-512/tiktok-512x512-2284872.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'twitch',
            'https://www.twitch.tv/',
            'mrcrunsh',
            'assets/icons/brands/png-512/twitch-512x512-2284864.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Xing',
            'https://www.xing.com/profile/',
            'Dennis_Hering4',
            'assets/icons/brands/png-512/xing-512x512-2284836.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'YouTube',
            'https://www.youtube.com/@',
            'DenHerrRing',
            'assets/icons/brands/png-512/youtube-512x512-2284830.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'twitter',
            'https://twitter.com/',
            'DenHerrRing',
            'assets/icons/brands/png-512/twitter-512x512-2284863.png',
            ''
        ))

        // TODO: Muss noch herausfinden, welche pre URL eingetragen werden muss!
        /*

         this.socialIcons.push(new SocialIcon(
            'whatsapp',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/png-512/whatsapp-512x512-2284843.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'trello',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/png-512/trello-512x512-2284870.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'wechat',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/png-512/wechat-512x512-2284845.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'threema',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/png-512/threema-512x512-2284873.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Signal',
            'https://www.reddit.com/user/',
            'DenHerrRing',
            'assets/icons/brands/png-512/signal-512x512-2284892.png',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Snapchat',
            'https://www.reddit.com/user/',
            'DenHerrRing',
            'assets/icons/brands/png-512/snapchat-512x512-2284887.png',
            ''
        ))

         */
    }
}
