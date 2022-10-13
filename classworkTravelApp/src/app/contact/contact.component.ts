import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email])
  });

  contacts:Array<{fName:string, lName:string, message:string, email:string}> = [];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.contact.valid){
      var data:any = this.contact.value;
      // console.table(data);
      this.contacts.push(data);
      console.table(this.contacts);
    }
  }

}
