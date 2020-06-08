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
showSuccessMessage:boolean;
formControls =this.orderService.form.controls;
  ngOnInit() {
  }
  onSubmit(){
    this.submitted=true;
   
    if(this.orderService.form.valid){
     if (this.orderService.form.get('$key').value == null)
     this.orderService.insertOrder(this.orderService.form.value);
     //insert


     this.showSuccessMessage =true;
     setTimeout(() =>this.showSuccessMessage =false,300);
     this.submitted= false;
    }
  

  }
}
