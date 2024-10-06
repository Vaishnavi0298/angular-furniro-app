import { Component } from '@angular/core';
import { KtdGridLayout } from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrl: './grid-layout.component.css'
})
export class GridLayoutComponent {
  // images = [
  //   { src: '/assets/products/cafe-chair.png', alt: 'Desk with laptop and plant' },
  //   { src: '/assets/products/cafe-chair.png', alt: 'Interior wall with decorative items and chair' },
  //   { src: '/assets/products/cafe-chair.png', alt: 'Bedroom with bed and side table' },
  //   { src: '/assets/products/cafe-chair.png', alt: 'Armchair with plant beside it' },
  //   {src: '/assets/products/cafe-chair.png', alt: 'Dining area with table and chairs' },
  //   { src: '/assets/products/cafe-chair.png', alt: 'Two framed pictures on a wall' },
  //   { src: '/assets/products/cafe-chair.png', alt: 'Bathroom interiors' },
  //   { src: '/assets/products/cafe-chair.png', alt: 'Additional image' }
  // ];
  layout = [
    { id: '0', x: 0, y: 0, w: 2, h: 2, img: '/assets/products/cafe-chair.png' },
    { id: '1', x: 2, y: 0, w: 2, h: 2, img: '/assets/products/cafe-chair.png' },
    { id: '2', x: 4, y: 0, w: 2, h: 2, img: '/assets/products/cafe-chair.png' },
    { id: '3', x: 0, y: 2, w: 2, h: 2, img: '/assets/products/cafe-chair.png'},
    { id: '4', x: 2, y: 2, w: 2, h: 2, img: '/assets/products/cafe-chair.png' },
    { id: '5', x: 4, y: 2, w: 2, h: 2, img: '/assets/products/cafe-chair.png' },
    { id: '6', x: 0, y: 4, w: 2, h: 2, img: '/assets/products/cafe-chair.png' },
    { id: '7', x: 2, y: 4, w: 2, h: 2, img: '/assets/products/cafe-chair.png' },
    { id: '8', x: 4, y: 4, w: 2, h: 2, img: '/assets/products/cafe-chair.png' }
  ];

  trackById(index: number, item: any) {
    return item.id;
  }

  onLayoutUpdated(event: any) {
    console.log('Layout updated:', event);
}
}
