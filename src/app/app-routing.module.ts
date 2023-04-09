import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './api/data/data.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductItemDetailComponent },
  { path: 'success', component: ConfirmationComponent },
  // { path: 'src/assets/data', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
