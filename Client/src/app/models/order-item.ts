import { DiscountType } from './types';

export class OrderItem {
    constructor() {
        this._discountType = 'percent';
        this.name = this.name ? this.name : '';
        this._qty = 1;
        this.price = (Math.random() * 10) % 10;
        // this.price =
        this._discount = 0;
        this.SetPriceDiscount();
    }
    private _qty: number;
    private _discount: number;
    private _discountType: DiscountType;
    name: string;
    code: string;
    price: number;
    netPrice: number;
    grossPrice: number;
    totalDiscount: number;

    public set discount(v: number) {
        this._discount = v;
        this.SetPriceDiscount();
    }
    public get discount(): number {
        return this._discount;
    }

    public set qty(v: number) {
        this._qty = v;
        this.SetPriceDiscount();
    }
    public get qty(): number {
        return this._qty;
    }

    public set discountType(v: DiscountType) {
        this._discountType = v;
        this.SetPriceDiscount();
    }

    public get discountType(): DiscountType {
        return this._discountType;
    }

    private SetPriceDiscount() {
        this.netPrice = this.qty * (this.discountType == 'percent' ? this.price * ((100 - this.discount) / 100.0) : this.price - this.discount);
        this.grossPrice = this.price * this.qty;
        this.totalDiscount = this.qty * this.discount;
    }
}

