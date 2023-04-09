export class ReceivedProduct {

    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    quantity:number

    constructor() { 
        this.id = 1;
        this.name = '';
        this.price = 20;
        this.url = '';
        this.description = '';
        this.quantity = 1;
    }
}  