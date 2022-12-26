export class SocialIcon {
    readonly name: string
    readonly preUrl: string
    accountUrl: string
    readonly placeholder: string
    readonly iconUrl: string
    readonly iconColor: string

    constructor(name: string, preUrl: string, placeholder: string, iconUrl: string, iconColor: string) {
        this.name = name
        this.preUrl = preUrl
        this.accountUrl = ''
        this.placeholder = placeholder
        this.iconUrl = placeholder
        this.iconColor = iconColor
    }
}
