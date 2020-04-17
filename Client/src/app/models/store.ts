export class Good {
    constructor() {
        this.name =
            this.unit =
            this.code = '---';
        this.ammount =
            this.orderPoint =
            this.price = 0;
        this.exist = true;
    }
    _id: string;
    name: string;
    unit: string;
    code: string;
    ammount: number;
    orderPoint: number;
    price: number;
    byList: [{
        date: Date;
        ammount: number;
        price: number;
    }];
    exist: boolean;
}