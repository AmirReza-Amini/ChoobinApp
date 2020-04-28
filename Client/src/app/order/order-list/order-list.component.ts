import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'app/models/order';
import { Map, GetIndex } from '../../shared/util/utilites'

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList: Order[]
  currentOrder: Order = new Order();
  constructor(private orderService: OrderService) {
    orderService.Get().subscribe(m => this.orderList = m.data);
  }

  SetCurrentOrder(order) {
    this.currentOrder = order;
  }
  UpdateStatus(order) {
    this.orderService.UpdateStatus(order)
      .subscribe(m => {
        if (m.result) {
          let index = GetIndex(this.orderList, '_id', m.data[0]._id);
          this.orderList[index] = m.data[0];
        }
        console.log(m)
      })
  }
  ngOnInit() {
  }

}
