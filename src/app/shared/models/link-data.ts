import {Social} from "./social";
import {Link} from "./link";
import {Config} from "./config";

export class LinkData {
    config: Config = new Config()
    socials!: Social[]
    links!: Link[]
}
