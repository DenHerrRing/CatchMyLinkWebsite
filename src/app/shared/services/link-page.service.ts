import {Injectable} from '@angular/core';
import {LinkData} from "../models/link-data";

@Injectable({
    providedIn: 'root'
})
export class LinkPageService {

    linkData!: LinkData

    constructor() {
        this.linkData = {
            id: 12,
            userName: 'dennis',
            profile: {
                id: 13,
                userId: 12,
                name: 'Dennis Hering',
                slug: 'DenHerrRing',
                profilPicturePath: 'https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-1/310759250_10222196360444781_7702490517519246525_n.jpg?stp=c52.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Y6P_bNq1SUgAX_7DqLY&_nc_ht=scontent-fra5-2.xx&oh=00_AfCKJWecwp7COnelwpVYV5tgSrfaB7eCFEt3Q9DIJW_BAQ&oe=63A550AF'
            },
            socials: [
                {
                    id: 234,
                    name: 'DEV',
                    preUrl: 'https://dev.to/',
                    accountUrl: 'denherrring',
                    placeholder: 'https://dev.to/',
                    iconUrl: 'assets/icons/brands/png-512/dev-512x512-2285030.png',
                    iconColor: ''
                },
                {
                    id: 235,
                    name: 'Facebook',
                    preUrl: 'https://www.facebook.com/',
                    accountUrl: 'DenHerrRing',
                    placeholder: 'https://www.facebook.com/',
                    iconUrl: 'assets/icons/brands/png-512/facebook-512x512-2285009.png',
                    iconColor: ''
                },
                {
                    id: 236,
                    name: 'GitHub',
                    preUrl: 'https://github.com/',
                    accountUrl: 'DenHerrRing',
                    placeholder: 'https://github.com/',
                    iconUrl: 'assets/icons/brands/png-512/github-512x512-2284999.png',
                    iconColor: ''
                }
            ],
            links: [
                {
                    id: 45,
                    title: 'Mein Blog',
                    url: 'https://dennis.hering.dev',
                    picturePath: ''
                },
                {
                    id: 46,
                    title: 'Twitch',
                    url: 'https://www.twitch.tv/mrcrunsh',
                    picturePath: ''
                },
                {
                    id: 47,
                    title: 'Discord',
                    url: 'https://www.google.com',
                    picturePath: ''
                }
            ]
        } as LinkData;
    }
}
