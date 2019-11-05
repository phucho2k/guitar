import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guitar';
  constructor(private http: HttpClient) { }
  url = './assets/db/categories.json'
  categories : any;
  ngOnInit(){
    this.getAllCategories().subscribe(data =>{
      this.categories = data;
    })
  }

  getAllCategories(){
    return this.http.get(this.url);
  }
}
