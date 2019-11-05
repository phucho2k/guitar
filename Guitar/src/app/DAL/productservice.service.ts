import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  getAllProduct()
  {
    return this.http.get('../../assets/db/guitar.json');
  }
  getAllCategories()
  {
    return this.http.get('../../assets/db/categories.json');
  }
}