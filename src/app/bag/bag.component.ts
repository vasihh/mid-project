import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  cartItems: Product[] = [];
  selectedSize: {[key: number]: string} = {};
  total : number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotalPrice();
  }

  freeShipping():boolean{
    return this.total>50;
  }

  
}
