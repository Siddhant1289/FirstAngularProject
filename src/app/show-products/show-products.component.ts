import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-show-products',
  // templateUrl: './show-products.component.html',
  // styleUrl: './show-products.component.css',
  template:`Product List:<br>
            <ul>
              <li *ngFor = 'let prod of products'>{{prod}}
            </ul>`
})
export class ShowProductsComponent {
  products : any;
  constructor(pservice : ProductServiceService){
      this.products = pservice.getProducts();
  }
}
