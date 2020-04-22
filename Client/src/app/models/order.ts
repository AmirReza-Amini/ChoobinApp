import { OrderStatus, Gender } from './types';
import { OrderItem } from './order-item';

export class Order {
    constructor() {
        this.orderNumber = '1399000025'
        this.status = 'pend';
        this.gender = 'male';
        this.price = this.discount = 0;
        this.date = Date.now();
        this.items = new Array();
        this.items.push(new OrderItem())
        this.items.forEach(m => this.price += m.netPrice)
        this.items.forEach(m => this.discount += m.totalDiscount)
        this.totalPrice = (this.price && this.price > 0) ? this.price - this.discount : 0;

    }
    orderNumber: string;
    name: string;
    address: string;
    gender: Gender;
    postalCode: string;
    phone: string;
    mobile: string;
    price: number;
    discount: number;
    totalPrice: number;
    date: number;
    status: OrderStatus;
    items: OrderItem[]
}

