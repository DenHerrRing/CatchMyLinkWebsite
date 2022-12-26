import {Injectable} from '@angular/core';
import {LinkData} from "../models/link-data";

@Injectable({
    providedIn: 'root'
})
export class LinkPageService {

    linkData!: LinkData

    constructor() {
        this.linkData = {
            id: 'adfasdfasfdasdf',
            user: {
                id: 'sdfasdfasdf',
                collectionId: 'safasdfasfdasf',
                collectionName: 'adfasdfadf',
                firstName: 'Dennis',
                lastName: 'Hering',
                profilPicturePath: 'https://via.placeholder.com/150',
                created: '',
                updated: '',
                username: 'DenHerrRing',
                verified: true,
                emailVisibility: true,
                email: 'dennis@hering.me'
            },
            socials: [
                {
                    name: 'DEV',
                    preUrl: 'https://dev.to/',
                    accountUrl: 'denherrring',
                    placeholder: 'https://dev.to/',
                    iconUrl: 'assets/icons/brands/png-512/dev-512x512-2285030.png',
                    iconColor: ''
                },
                {
                    name: 'Facebook',
                    preUrl: 'https://www.facebook.com/',
                    accountUrl: 'DenHerrRing',
                    placeholder: 'https://www.facebook.com/',
                    iconUrl: 'assets/icons/brands/png-512/facebook-512x512-2285009.png',
                    iconColor: ''
                },
                {
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
                    title: 'Mein Blog',
                    url: 'https://dennis.hering.dev'
                },
                {
                    title: 'Twitch',
                    url: 'https://www.twitch.tv/mrcrunsh'
                },
                {
                    title: 'Discord',
                    url: 'https://www.google.com'
                }
            ]
        } as LinkData;
    }
}
