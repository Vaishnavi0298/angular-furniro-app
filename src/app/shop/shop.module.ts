import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopPageComponent } from './shop-page.component';
import { ShopBannerComponent } from './shop-banner/shop-banner.component';
import { SharedModule } from '../shared/shared.module';
import { ServiceHighlightsComponent } from './service-highlights/service-highlights.component';
import { RouterModule } from '@angular/router';
// import { ServiceHighlightsComponent } from './service-highlights/service-highlights.component';


@NgModule({
  declarations: [
    ShopPageComponent,
    ShopBannerComponent,
    ServiceHighlightsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class ShopModule { }
