import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit,OnDestroy {
cartItems : Product[] = [];
private subscription : Subscription = new Subscription;
selectedSize: {[key: number]: string} = {};
constructor (private cartservices : CartService){

}

ngOnInit(): void {
  this.subscription = this.cartservices.getCartItems().subscribe(items => this.cartItems = items);

}

ngOnDestroy(): void {
  if(this.subscription){
    this.subscription.unsubscribe();
  }
}
}
