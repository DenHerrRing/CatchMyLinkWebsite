import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {map, Observable, Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {LinkPageService} from "../../shared/services/link-page.service";
import {LinkData} from "../../shared/models/link-data";

@Component({
  selector: 'app-links-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.css']
})
export class LinksPageComponent implements OnInit{
    username?: Observable<string>

    linkData!: LinkData
    constructor(private route: ActivatedRoute,
                private linkPageService: LinkPageService) {

    }

    getSocialUrl(preUrl: string, accountUrl: string): string {
        return `${preUrl}${accountUrl}`
    }

    ngOnInit() {

        this.username = this.route.paramMap
            .pipe(
                map((params: ParamMap) => params.get('username'))
            ) as Observable<string>;

        // this.route.params.subscribe(params => {
        //     this.username = params['username']
        // });

        console.log(this.username)

        this.linkData = this.linkPageService.linkData
    }
}
