import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getProducts(){
    return ["TV", "Fridge", "Mobile", "Laptop", "Car","Shoes", "Books", "Electronics"];
  }
}
