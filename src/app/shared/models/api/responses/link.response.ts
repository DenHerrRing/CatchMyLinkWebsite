import {LinkData} from "../../link-data";

export class LinkResponse {
    collectionId!: string
    collectionName!: string
    created!: string
    data!: LinkData
    id!: string

    profilePicture?: File
    updated!: string
    user!: string
}
