import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  heroData = {
    title: 'Discover Our New Collection',
    subtitle: 'New Arrival',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    buttonText: 'Buy Now',
    buttonUrl: '#'
  };

  images = [
    { src: '/assets/banner-background.jpg', alt: 'Furniture Image' }
  ];
}
