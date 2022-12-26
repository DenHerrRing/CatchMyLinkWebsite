import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
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
    userId!: number

    linkData!: LinkData
    constructor(private route: ActivatedRoute,
                private linkPageService: LinkPageService) {

    }

    getSocialUrl(preUrl: string, accountUrl: string): string {
        return `${preUrl}${accountUrl}`
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['userid']
        });

        this.linkData = this.linkPageService.linkData
    }
}
