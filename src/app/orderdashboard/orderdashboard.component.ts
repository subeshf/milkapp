import { Component, OnInit } from '@angular/core';
import { OrderService} from '../shared/order.service';

@Component({
  selector: 'app-orderdashboard',
  templateUrl: './orderdashboard.component.html',
  styleUrls: ['./orderdashboard.component.css']
})
export class OrderdashboardComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getTotalorder();
  }

}
