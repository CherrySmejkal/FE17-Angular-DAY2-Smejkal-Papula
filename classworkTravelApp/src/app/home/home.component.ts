import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trips:Array<{name:string, price:number, night:number, city:string, img:string}> = [
    {
      name:"Luxus Intrendy",
      price: 50000,
      night: 10,
      city:  "New York, USA", 
      img: "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }, {
      name: "Luxus Jungle", 
      price: 65000, 
      night: 10, 
      city: "South Africa", 
      img: "https://images.unsplash.com/photo-1511185307590-3c29c11275ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
    }, {
      name: "Luxus Excotic", 
      price: 45000, 
      night: 10, 
      city: "Phuket, Thailand", 
      img: "https://images.unsplash.com/photo-1655921779877-b1eaebbf8543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }, {
      name: "Luxus up above", 
      price: 55000, 
      night: 10, 
      city: "Innsbruck, Austria", 
      img: "https://images.unsplash.com/photo-1517253259615-dff3842d2544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }, {
      name: "Luxus on Ice", 
      price: 75000, 
      night: 10, 
      city: "Island", 
      img: "https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }, {
      name: "Luxus Aurora", 
      price: 80000, 
      night: 10, 
      city: "Norway", 
      img: "https://images.unsplash.com/photo-1577456020912-85d0604ad403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    }
  ];


  cars: Array<{brand:string, seat:number, price: number, img:string}> = [];

  constructor(){}
  
  ngOnInit(): void {
  }
}

// let trips:Array<Trip> = [];
//   class Trip {
//     destination:string;
//     price:number;
//     night:number;
//     city:string;
//     img:string;
//     constructor(destination:string, price:number, night:number, city:string, img:string) { 
//       this.destination = destination;
//       this.price = price;
//       this.night = night;
//       this.city = city;
//       this.img = img; 
//       trips.push(this); 
//     }
//     info(){
//       return `
//       <div class="card m-3" style="width: 18rem">
//         <img
//           src="${this.img}"
//           class="card-img-top"
//           alt="${this.destination}"
//         />
//         <div class="card-body">
//           <h5 class="card-title">${this.destination}</h5>
//           <p class="card-text">
//             Some quick example text to build on the card title and make up the bulk of
//             the card's content.
//           </p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">Price: €${this.price}</li>
//           <li class="list-group-item">Night: ${this.night}</li>
//           <li class="list-group-item">City: ${this.city}</li>
//         </ul>
//       </div>
//       `;
//     }
//   }

//   let trip1 = new Trip ("Luxus Intrendy", 50000, 10, "New York, USA", "https://images.unsplash.com/photo-1460551204960-763bc82b7d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80");
//   let trip2 = new Trip ("Luxus Jungle", 65000, 10, "South Africa", "https://images.unsplash.com/photo-1511185307590-3c29c11275ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80");
//   let trip3 = new Trip ("Luxus Excotic", 45000, 10, "Phuket, Thailand", "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
//   let trip4 = new Trip ("Luxus up above", 55000, 10, "Innsbruck, Austria", "https://images.unsplash.com/photo-1580077416594-c5f94fc6b709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
//   let trip5 = new Trip ("Luxus on Ice", 75000, 10, "Island", "https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
//   let trip6 = new Trip ("Luxus Aurora", 80000, 10, "Norway", "https://images.unsplash.com/photo-1577456020912-85d0604ad403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
  
