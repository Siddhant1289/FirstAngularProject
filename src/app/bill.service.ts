import { Injectable } from '@angular/core';
import { Product } from './my-first/Product';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor() { }

  getBill(prod : Product){
    return prod.getQty() * prod.getPrice();
  }
}
