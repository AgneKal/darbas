import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  public getProducts() {
    return this.http.get<Product[]>('http://localhost:5000/products/')
  }

    public getFilteredProduct(filter: String){
    return this.http.get<Product[]>('http://localhost:5000/products/filter/'+filter);
  }
  
  public getProduct(id: number){
    return this.http.get<Product>('http://localhost:5000/products/'+id);
  }
  
  public addProduct(product: Product) {
  return this.http.post('http://localhost:5000/products/', product);
  }
  
  public updateProduct(product: Product){
    return this.http.put<Product>('http://localhost:5000/products/', product);
  }

  public deleteProduct(id: number){
    return this.http.delete('http://localhost:5000/products/'+id);
  }
}