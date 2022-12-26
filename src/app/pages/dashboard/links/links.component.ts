import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinkPageService} from "../../../shared/services/link-page.service";
import {LinkData} from "../../../shared/models/link-data";

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
    linkData!: LinkData
    constructor(private linkPageService: LinkPageService) {
    }

    getSocialUrl(preUrl: string, accountUrl: string): string {
        return `${preUrl}${accountUrl}`
    }

    ngOnInit(): void {
        this. linkData = this.linkPageService.linkData
    }
}
