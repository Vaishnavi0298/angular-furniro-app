import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navLinks = [
    { name: 'Home', url: '#' },
    { name: 'Shop', url: '#' },
    { name: 'About', url: '#' },
    { name: 'Contact', url: '#' }
  ];

  // Data for the hero section
  // heroData = {
  //   title: 'Discover Our New Collection',
  //   subtitle: 'New Arrival',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
  //   buttonText: 'Buy Now',
  //   buttonUrl: '#'
  // };

  // // Example array for images
  // images = [
  //   { src: 'https://via.placeholder.com/500x400', alt: 'Furniture Image' }
  // ];

}
