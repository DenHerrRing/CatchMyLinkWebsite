import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinksPageComponent} from "../../pages/links-page/links-page.component";

@Component({
  selector: 'app-mock-phone',
  standalone: true,
    imports: [CommonModule, LinksPageComponent],
  templateUrl: './mock-phone.component.html',
  styleUrls: ['./mock-phone.component.css']
})
export class MockPhoneComponent {

}
