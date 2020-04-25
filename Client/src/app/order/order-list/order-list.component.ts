import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'app/models/order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList: Order[]
  currentOrder: Order = new Order();
  constructor(orderService: OrderService) {
    orderService.Get().subscribe(m => this.orderList = m.data);
  }

  SetCurrentOrder(order) {
    this.currentOrder = order;
  }
  ngOnInit() {
  }

}
