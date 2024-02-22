import { Component } from '@angular/core';
import { BillService } from '../bill.service';
import { Product } from './Product';

@Component({
  selector: 'myfirst',
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.css'
})
export class MyFirstComponent {

  prod = new Product(1,"TV", 2, 50000);

  billAmount : any;
  constructor(billService :  BillService) {
    this.billAmount = billService.getBill(this.prod);
}
}
