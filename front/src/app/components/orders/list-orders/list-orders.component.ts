import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../../../models/orders';
import { Product } from '../../../models/product';
import { OrdersService } from '../../../services/orders.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.css'
})
export class ListOrdersComponent {
  public orders:Order[]=[];
  public products:Product[]=[];

  private loadRecords(){
    this.ordersService.getOrders().subscribe({
      next:(result)=>{
        this.orders=result;
      }
    });
  }
 
  constructor(private ordersService:OrdersService,  private productsService:ProductsService){
    this.loadRecords();
  } 

  public deleteOrder(id?: number){
    if(id != null){
      this.ordersService.deleteOrder(id).subscribe({
        next:() => {
          this.loadRecords();
        }
      });
    }
  }
}
