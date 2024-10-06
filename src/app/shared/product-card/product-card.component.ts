import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: string;
  @Input() originalPrice?: string;
  @Input() discount?: string;
  @Input() isNew?: boolean;
  @Input() image!: any;
  @Input() product!: any;
  @Input() id!: any;
  constructor(private modalService: NgbModal,
    private router: Router
  ) {}

  openModal() {
    this.modalService.open('addToCartModal');
  }

 public addToCart(product:any) {
    // Add to cart logic
    console.log("this.product.name]);",product.id)
    this.router.navigate(['/product-details', product.id]);
   
  }
}
