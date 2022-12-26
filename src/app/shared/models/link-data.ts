import {Social} from "./social";
import {Link} from "./link";
import {UserResponse} from "./api/responses/user.response";

export class LinkData {
    id?: string
    user!: UserResponse
    socials!: Social[]
    links!: Link[]
}
