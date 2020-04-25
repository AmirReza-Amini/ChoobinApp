import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from 'app/models/types';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: OrderStatus, ...args: any[]): any {
    switch (value) {
      case 'pend': return 'صادر شده';
      case 'paid': return 'پرداخت شده';
      case 'sent': return 'ارسال شده';
    }
  }

}
