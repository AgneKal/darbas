import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  public getOrders(){
    return this.http.get<Order[]>('http://localhost:3306/orders/');
  }

  public getOrder(id:number){
    return this.http.get<Order>('http://localhost:3306/orders/'+id);
  }
  public addOrder(order:Order){
    return this.http.post<Order>('http://localhost:3306/orders/', order);
  }

  public deleteOrder(id: number){
    return this.http.delete('http://localhost:3306/orders/'+id);
  }
}
