import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  displayedColumns: string[] = ['name', 'price', 'category', 'actions'];

  products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Chair', price: 100, category: 'Furniture' },
    { name: 'Watch', price: 250, category: 'Accessories' }
  ];

  editProduct(product: any) {
    console.log('Edit', product);
    // Implement edit logic here
  }

  deleteProduct(product: any) {
    console.log('Delete', product);
    // Implement delete logic here
  }
}
