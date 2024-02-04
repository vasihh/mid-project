import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartCount = 0;
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.getCartCount()
      .subscribe(count => {
        this.cartCount = count;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
