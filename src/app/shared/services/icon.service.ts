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
            'assets/icons/brands/svg/facebook-2285009.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'DEV',
            'https://dev.to/',
            'DenHerrRing',
            'assets/icons/brands/svg/dev-2285030.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'GitHub',
            'https://github.com/',
            'DenHerrRing',
            'assets/icons/brands/svg/github-2284999.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Discord',
            'discordapp.com/users/',
            'DenHerrRing',
            'assets/icons/brands/svg/discord-2285027.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Ghost',
            'https://{account}.ghost.org/',
            'DenHerrRing',
            'assets/icons/brands/svg/ghost-2285002.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'GitLab',
            'https://gitlab.com/',
            'DenHerrRing',
            'assets/icons/brands/svg/gitlab-2284998.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Instagram',
            'https://www.instagram.com/',
            'DenHerrRing',
            'assets/icons/brands/svg/instagram-2284970.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'LinkedIn',
            'https://www.linkedin.com/',
            'DenHerrRing',
            'assets/icons/brands/svg/linkedin-2284952.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Medium',
            'https://medium.com/@',
            'DenHerrRing',
            'assets/icons/brands/svg/medium-2284941.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Meetup',
            'https://www.meetup.com/members/',
            '214911037',
            'assets/icons/brands/svg/meetup-2284940.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Patreon',
            'https://www.patreon.com/',
            'DenHerrRing',
            'assets/icons/brands/svg/patreon-2284922.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'PayPal',
            'https://paypal.me/',
            'denhering',
            'assets/icons/brands/svg/paypal-2284921.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'reddit',
            'https://www.reddit.com/user/',
            'DenHerrRing',
            'assets/icons/brands/svg/reddit-2284905.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Spotify',
            'https://open.spotify.com/user/',
            'DenHerrRing',
            'assets/icons/brands/svg/spotify-2284885.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'steam',
            'https://steamcommunity.com/id/',
            'DenHerrRing',
            'assets/icons/brands/svg/steam-2284881.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Telegram',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/svg/telegram-2284874.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'tiktok',
            'https://www.tiktok.com/@',
            'DenHerrRing',
            'assets/icons/brands/svg/tiktok-2284872.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'twitch',
            'https://www.twitch.tv/',
            'mrcrunsh',
            'assets/icons/brands/svg/twitch-2284864.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Xing',
            'https://www.xing.com/profile/',
            'Dennis_Hering4',
            'assets/icons/brands/svg/xing-2284836.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'YouTube',
            'https://www.youtube.com/@',
            'DenHerrRing',
            'assets/icons/brands/svg/youtube-2284830.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'twitter',
            'https://twitter.com/',
            'DenHerrRing',
            'assets/icons/brands/svg/twitter-2284863.svg',
            ''
        ))

        // TODO: Muss noch herausfinden, welche pre URL eingetragen werden muss!
        /*

         this.socialIcons.push(new SocialIcon(
            'whatsapp',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/svg/whatsapp-2284843.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'trello',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/svg/trello-2284870.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'wechat',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/svg/wechat-2284845.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'threema',
            'https://t.me/',
            'DenHerrRing',
            'assets/icons/brands/svg/threema-2284873.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Signal',
            'https://www.reddit.com/user/',
            'DenHerrRing',
            'assets/icons/brands/svg/signal-2284892.svg',
            ''
        ))

        this.socialIcons.push(new SocialIcon(
            'Snapchat',
            'https://www.reddit.com/user/',
            'DenHerrRing',
            'assets/icons/brands/svg/snapchat-2284887.svg',
            ''
        ))

         */
    }
}
