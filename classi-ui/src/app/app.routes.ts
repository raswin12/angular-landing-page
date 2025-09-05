import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ProductList } from './product-list/product-list';


export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'product-list', component: ProductList },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }     // Default route

];