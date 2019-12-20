import { Component, OnInit} from '@angular/core';
import {  Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'Register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(page: Page) { page.actionBarHidden = true;}

  ngOnInit() {

  }


}
