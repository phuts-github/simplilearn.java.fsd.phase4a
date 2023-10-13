export class Shopmenu {
    id: number;
    name: string;
    descr: string;
    imagepath: string;
    price: number;
    status: string;
    code: string;    
    createdate: string;
    modifydate: string;
}

export class Basket {
    id: number;
    name: string;
    userid: number;
    price: number;
}

export class OrderPayment {
    payname: string;
    paycardno: number;
    payexpdate:number;
    paythreedigits:number;
    payamount: number;
}
