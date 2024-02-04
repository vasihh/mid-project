import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCart : Product[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  private cartItems  = new BehaviorSubject<Product[]>(this.itemsInCart);

  constructor() { }

  addToCart(product : Product) {
    this.itemsInCart.push(product);
    this.cartCount.next(this.itemsInCart.length);
    this.cartItems.next(this.itemsInCart);
  }

  getCartCount() {
    return this.cartCount.asObservable();
  }

  getCartItems(){
    return this.cartItems.asObservable();
  }
}
