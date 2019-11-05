import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../DAL/cartservice.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any;
  quantity=[];
  subTotal=0;
  constructor(
    private cart: CartserviceService
  ) { }

  ngOnInit() {
    this.items = this.cart.getItems();
  }
  removeAll()
  {
    this.cart.clearCart();
    window.alert('Cleared.')
  }
  total(index){
    return this.items[index].price*this.quantity[index];
  }
  subt()
  {
    for (let index = 0; index < this.items.length; index++) {
      this.subTotal+=this.items[index].price*this.quantity[index];
      return this.subTotal;
    }
    
  }
}
