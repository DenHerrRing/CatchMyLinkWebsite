import {LinkResponse} from "./link.response";

export class LinksListResponse {
    items: LinkResponse[] = []
    page!: number
    perPage!: number
    totalItems!: number
    totalPages!: number
}
