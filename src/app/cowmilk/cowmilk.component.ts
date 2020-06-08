import { Component, OnInit } from '@angular/core';
import {OrderService} from '../shared/order.service';
@Component({
  selector: 'app-cowmilk',
  templateUrl: './cowmilk.component.html',
  styleUrls: ['./cowmilk.component.css']
})
export class CowmilkComponent implements OnInit {

  constructor(public orderService: OrderService) { }
submitted:boolean;
formControls =this.orderService.form.controls;
  ngOnInit() {
  }
  onSubmit(){
    this.submitted=true;
    if(this.orderService.form.valid){
     // if (this.orderService.form.get('$').value ==null)
     //insert
     this.submitted= false;
    }
  

  }
}
