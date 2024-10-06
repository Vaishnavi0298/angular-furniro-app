import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.css'
})
export class CarouselCardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: string;
  @Input() originalPrice?: string;
  @Input() discount?: string;
  @Input() isNew?: boolean;
  @Input() image!: any;



}
