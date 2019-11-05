import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../DAL/productservice.service';
import {CartserviceService} from '../DAL/cartservice.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  product:any;
  listproduct:any;
  features:any;
  
  constructor( private rout:ActivatedRoute , private ps: ProductserviceService, private cart: CartserviceService) { }

  ngOnInit() {
    const pid=+this.rout.snapshot.paramMap.get('pid');
    this.ps.getAllProduct().subscribe(data=>{
      this.listproduct=data;
      this.product=this.listproduct.find(x=>x.id=pid);
      this.features=this.product.newfeature;
    })
  }
  addToCart()
  {
    let appProduct=Object.assign(this.product);
    this.cart.addToCart(appProduct);
    window.alert('Your product has been added to the cart!');
  }

}