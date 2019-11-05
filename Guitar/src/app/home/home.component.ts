import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url = './assets/db/guitar.json';
  products: any;
  ngOnInit() {
    this.getProduct().subscribe(data=>{
      this.products = data;
    })
  }
  getProduct(){
    return this.http.get(this.url)
  }

}
