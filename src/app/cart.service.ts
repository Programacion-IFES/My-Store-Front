import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './products';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/products';

 /* headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Headers", "Origin, Content-Type")*/

getConfig() {
  return this.http.get(this.configUrl);
}

  addToCart(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }

  getItems(): Observable<any> {
    return this.http.get(this.configUrl);
  }

  getCartItems() {
    return this.items;
  }


  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}
