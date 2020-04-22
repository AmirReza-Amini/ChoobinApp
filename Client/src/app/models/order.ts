import { OrderStatus, Gender } from './types';
import { OrderItem } from './order-item';

export class Order {
    constructor() {
        this.orderNumber = '1399000025'
        this.status = 'pend';
        this.gender = 'male';
        this.date = Date.now();
        this.items = new Array();
        this.items.push(new OrderItem())
        this.totalPrice = this.price || 0 - this.discount;
    }

    orderNumber: string;
    name: string;
    address: string;
    gender: Gender;
    postalCode: string;
    phone: string;
    mobile: string;
    date: number;
    status: OrderStatus;
    items: OrderItem[];

    public get price(): number {
        return this.items.reduce((a, b) => a + (b.grossPrice), 0);
    }
    public get discount(): number {
        return this.items.reduce((a, b) => a + (b.totalDiscount), 0);
    }
    public get totalPrice(): number {
        return this.items.reduce((a, b) => a + (b.netPrice), 0);
    }

    public set price(v: number) {
        console.log(v)
    }
    public set discount(v: number) {
        console.log(v)
    }
    public set totalPrice(v: number) {
        console.log(v)
    }



}

