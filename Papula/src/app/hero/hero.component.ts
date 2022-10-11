import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  cars: Array <{name: string, text: string, image: string, link: string}> = [
    {
      name: "Ford Mustang Shelby GT",
      text: "The Shelby Mustang is a high-performance variant of the Ford Mustang built by Shelby American from 1965 to 1967 and by the Ford Motor Company from 1968 to 1970",
      image: "assets/images/ford_mustang_shelby_gt.jpg",
      link: "https://en.wikipedia.org/wiki/Shelby_Mustang"
    },
    {
      name: "Cadillac",
      text: "The Cadillac Motor Car Division (/ˈkædɪlæk/) is a division of the American automobile manufacturer General Motors (GM) that designs and builds luxury vehicles. Its major markets are the United States, Canada, and China. Cadillac models are distributed in 34 additional markets worldwide.",
      image: "assets/images/cadillac.webp",
      link: "https://en.wikipedia.org/wiki/Cadillac"
    },
    {
      name: "Corvette",
      text: "The Chevrolet Corvette, colloquially known in the USA as the 'Vette, is a two-door, two-passenger luxury sports car manufactured and marketed by Chevrolet since 1953",
      image: "assets/images/corvette.jpg",
      link: "https://en.wikipedia.org/wiki/Chevrolet_Corvette"
    },
    {
      name: "Mercedes AMG",
      text: "Mercedes-AMG GmbH, commonly known as AMG, is the high-performance subsidiary of Mercedes-Benz AG.",
      image: "assets/images/mercedes_amg.jpg",
      link: "https://en.wikipedia.org/wiki/Mercedes-AMG"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
