import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sideNavOpen : boolean = true
  icon        : string = 'close'

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.sideNavOpen = !this.sideNavOpen
    if(this.sideNavOpen) {
      this.icon = 'close'
    } else {
      this.icon = 'menu'
    }
  }

}
