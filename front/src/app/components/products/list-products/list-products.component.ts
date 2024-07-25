import { Component, SimpleChanges } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductsService } from '../../../services/products.service';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  public products:Product[] = [];

  private loadProducts(){
      this.productsService.getProducts().subscribe((data) => {
        this.products = data;
      });
  }
  
  constructor(private productsService: ProductsService, public authService: AuthService){
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadProducts();
  }

  public deleteProduct(id: number){
    this.productsService.deleteProduct(id).subscribe((data) => {
      this.loadProducts();
    });
  }
}
