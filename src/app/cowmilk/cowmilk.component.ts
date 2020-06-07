import { Component, OnInit } from '@angular/core';
import {OrderService} from '../shared/order.service';
@Component({
  selector: 'app-cowmilk',
  templateUrl: './cowmilk.component.html',
  styleUrls: ['./cowmilk.component.css']
})
export class CowmilkComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit() {
  }

}
