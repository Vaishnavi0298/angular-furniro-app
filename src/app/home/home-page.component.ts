import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public products1 = [
    {  id:1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      discount: '-30%',
      isNew: false,
      image: '/assets/products/cafe-chair.png'
    },
    {  
      id:2,
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      originalPrice: '',
      discount: '-50%',
      isNew: false,
      image: '/assets/products/cafe-chair2.png'
    },
    {
      id:3,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      discount: '',
      isNew: false,
      image: '/assets/products/sofa.png'
    },
    {
      id:4,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 'Rp 500.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/outdoor-table.png'
    },
    {
      id:5,
      name: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      originalPrice: '',
      discount: '',
      isNew: false,
      image: '/assets/products/night-lamp.png'
    },
    {
      id:6,
      name: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/small-mug.png'
    },
    {
      id:7,
      name: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      discount: '-50%',
      isNew: false,
      image: '/assets/products/pingky.png'
    },
    {
      id:8,
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 'Rp 500.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/potty.png'
    }
  ];


  // public products2 = [
  //   {
  //     id:6,
  //     name: 'Grifo',
  //     description: 'Night lamp',
  //     price: 'Rp 1.500.000',
  //     originalPrice: '',
  //     discount: '',
  //     isNew: false,
  //     image: '/assets/products/night-lamp.png'
  //   },
  //   {
  //     id:7,
  //     name: 'Muggo',
  //     description: 'Small mug',
  //     price: 'Rp 150.000',
  //     originalPrice: '',
  //     discount: '',
  //     isNew: true,
  //     image: '/assets/products/small-mug.png'
  //   },
  //   {
  //     id:8,
  //     name: 'Pingky',
  //     description: 'Cute bed set',
  //     price: 'Rp 7.000.000',
  //     originalPrice: 'Rp 14.000.000',
  //     discount: '-50%',
  //     isNew: false,
  //     image: '/assets/products/pingky.png'
  //   },
  //   {
  //     id:4,
  //     name: 'Potty',
  //     description: 'Minimalist flower pot',
  //     price: 'Rp 500.000',
  //     originalPrice: '',
  //     discount: '',
  //     isNew: true,
  //     image: '/assets/products/potty.png'
  //   }
  // ];
}
