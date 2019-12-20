import { Component, OnInit } from '@angular/core';
import { EventData, Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(page: Page) { page.actionBarHidden = true;}

  ngOnInit() {
  }

}
