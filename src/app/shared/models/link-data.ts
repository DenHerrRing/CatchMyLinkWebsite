import {Social} from "./social";
import {Profile} from "./profile";
import {Link} from "./link";

export class LinkData {
    id?: number
    userName!: string
    profile!: Profile
    socials!: Social[]
    links!: Link[]
}
