import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  inputCar = new FormGroup({
    model: new FormControl("", Validators.required),
    brand: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    img: new FormControl("", Validators.required)
  });

  carList:Array<{model:string, brand:string, price:number, img:string}> = [{
    model: "Yaris",
    brand: "Toyota",
    price: 200,
    img: "https://imgr1.auto-motor-und-sport.de/Toyota-Yaris-GR-Sport-169FullWidth-b42edd3b-1856416.jpg"
  }];
  constructor() { }

  ngOnInit(): void {
  }

    onSubmit(){
    if(this.inputCar.valid){
      var data:any = this.inputCar.value;
      // console.table(data);
      this.carList.push(data);
      this.inputCar.reset();
      console.table(this.carList);
    }
  }
}
