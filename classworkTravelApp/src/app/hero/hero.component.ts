import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroTitle: string = "Travel through the world";
  heroInfo: string = "Explore your life time experience and enjoy your wonderful moment with us."
  heroBtn: string = "Learn more";
  constructor() { }

  ngOnInit(): void {
  }

}
