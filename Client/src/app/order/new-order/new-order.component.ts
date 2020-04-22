import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderItem } from 'app/models/order-item';

@Component({
  selector: 'new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  currentOrder: Order = new Order();
  constructor() { }

  Save(data) {
    console.log("NewOrderComponent -> Save -> data", data)

  }

  AddItem() {
    this.currentOrder.items.push(new OrderItem())
  }
  ngOnInit() {
  }

}
