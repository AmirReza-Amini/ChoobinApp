import { Customer } from './customer';
import { OrderStatus } from './types';
import { OrderItem } from './order-item';

export class Order {
    constructor() {
        this.orderNumber = '1399000025'
        this.status = 'pend';
        this.customer = new Customer();
        this.customer.gender = 'male';
        this.createDate = Date.now();
        this.items = new Array();
        this.items.push(new OrderItem())
        this.totalPrice = this.price || 0 - this.discount;
        this.creator = 'admin';
    }
    private price: number;
    private discount: number;
    private totalPrice: number;
    orderNumber: string;
    customer: Customer;
    createDate: number;
    status: OrderStatus;
    items: OrderItem[];
    sendData: { date: Date; trackingCode: string; };
    payment: { date: Date; trackingCode: string; }
    creator: String;
    public get _price(): number {
        this.price = this.items.reduce((a, b) => a + (b.grossPrice), 0);
        return this.price;
    }
    public get _discount(): number {
        this.discount = this.items.reduce((a, b) => a + (b.totalDiscount), 0);
        return this.discount;
    }
    public get _totalPrice(): number {
        this.totalPrice = this.items.reduce((a, b) => a + (b.netPrice), 0);
        return this.totalPrice;
    }

    public set _price(v: number) {
        this.price = v;
    }
    public set _discount(v: number) {
        this.discount = v;
    }
    public set _totalPrice(v: number) {
        this.totalPrice = v;
    }



}

