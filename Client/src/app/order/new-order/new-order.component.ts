import { OrderService } from './../order.service';
import { ProductService } from './../../products/product.service';
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
  constructor(private productService: ProductService, private orderService: OrderService) { }

  Save(data: Order) {
    data.totalQty = data.items.reduce((a, b) => parseInt(a.toString()) + (parseInt(b._qty.toString()) || 0), 0)
    this.orderService.Add(data)
      .subscribe(m => {
        if (m.result)
          this.currentOrder.orderNumber = m.data[0].orderNumber
      })
  }

  SearchByCode(event: KeyboardEvent, code: string, index: number) {
    if (event.key == 'Enter' && code && code.length > 3) {
      this.productService.GetProducts({ 'code': code })
        .subscribe(m => {
          if (m.result) {
            this.currentOrder.items[index].name = m.data[0].name;
            this.currentOrder.items[index]._price = m.data[0].price;
          }
        })
    }

  }

  RemoveItem(index) {
    if (index != 0)
      this.currentOrder.items.splice(index, 1);
  }

  AddItem(event: MouseEvent) {
    if (event.x == 0) return;
    this.currentOrder.items.push(new OrderItem())
  }
  ngOnInit() {
  }

}
