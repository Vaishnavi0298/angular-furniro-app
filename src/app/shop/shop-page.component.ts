import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {

  public paginatedProducts:any = [];
  public currentPage = 1;
  public itemsPerPage = 8;
  public totalPages = 0;
  public  pages: any = [];
  public products2 = [
    { id:1,
      name: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      originalPrice: '',
      discount: '',
      isNew: false,
      image: '/assets/products/night-lamp.png'
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/small-mug.png'
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      discount: '-50%',
      isNew: false,
      image: '/assets/products/pingky.png'
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      originalPrice: '',
      discount: '',
      isNew: false,
      image: '/assets/products/night-lamp.png'
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      discount: '-50%',
      isNew: false,
      image: '/assets/products/pingky.png'
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      discount: '-50%',
      isNew: false,
      image: '/assets/products/pingky.png'
    },
    {
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 'Rp 500.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/potty.png'
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      originalPrice: '',
      discount: '',
      isNew: false,
      image: '/assets/products/night-lamp.png'
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      discount: '-50%',
      isNew: false,
      image: '/assets/products/pingky.png'
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      originalPrice: '',
      discount: '',
      isNew: false,
      image: '/assets/products/night-lamp.png'
    },
    {
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 'Rp 500.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/potty.png'
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      originalPrice: '',
      discount: '',
      isNew: false,
      image: '/assets/products/night-lamp.png'
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/small-mug.png'
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/small-mug.png'
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/small-mug.png'
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/small-mug.png'
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/small-mug.png'
    },
    {
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 'Rp 500.000',
      originalPrice: '',
      discount: '',
      isNew: true,
      image: '/assets/products/potty.png'
    }
  ];


  ngOnInit() {
    this.totalPages = Math.ceil(this.products2.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.paginateProducts();
  }

  paginateProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.products2.slice(start, end);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginateProducts();
  }
}
