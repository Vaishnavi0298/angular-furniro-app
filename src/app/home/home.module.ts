import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { BannerComponent } from './banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeImageComponent } from './image/image-section.component';
// import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { CarouselCardComponent } from './carousel/carousel-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
// import { GridLayoutComponent } from '../grid-layout/grid-layout.component';


@NgModule({
  declarations: [
    HomePageComponent,
    BannerComponent,
    HomeImageComponent,
    CarouselCardComponent,
    GridLayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
  ]
})
export class HomeModule { }
