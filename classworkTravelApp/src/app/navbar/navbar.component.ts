import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  donateAmount:number = 10;

  sumDonate(){
    this.donateAmount = this.donateAmount + 10;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
