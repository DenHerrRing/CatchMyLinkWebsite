import {Social} from "./social";
import {Link} from "./link";

export class LinkData {
    user?: { firstName: string, lastName: string, profilePicturePath: string, username: string};
    socials!: Social[]
    links!: Link[]
}
