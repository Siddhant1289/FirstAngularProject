export class Product{
    pcode : number | undefined;
    pname :  string | undefined ;
    qty :  number | undefined;
    price : number | undefined;
    
    constructor(pcode?:number,pname?:string,qty?:number,price?:number){
        this.pcode = pcode;
        this.pname=pname;
        this.qty=qty;
        this.price=price;
    }

    getQty() : any{
        return this.qty;
    }

    getPrice() : any{
        return this.price;
    }
}
