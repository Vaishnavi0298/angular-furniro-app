import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';

const routes: Routes = [
  
  { path: '', component: HomePageComponent }, // Home page (default route)
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) }, // Lazy load ShopModule
  { path: 'product-details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
