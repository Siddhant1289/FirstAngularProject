import { Component } from '@angular/core';

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
  products=["TV", "Fridge", "Mobile"]
}
