import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsInCart: Product[] = [];
  private total_price: number = 0;

  cartUpdated = new EventEmitter<void>();

  addToCart(product: Product) {
    this.itemsInCart.push(product);
    this.total_price += product.price;
    this.cartUpdated.emit();
  }

  getCartItems() {
    return this.itemsInCart.slice(); 
  }

  getCartCount() {
    return this.itemsInCart.length; 
  }

  getTotalPrice() {
    return this.total_price; 
  }
}
