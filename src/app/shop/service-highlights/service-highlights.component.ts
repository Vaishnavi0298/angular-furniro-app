import { Component } from '@angular/core';

@Component({
  selector: 'app-service-highlights',
  templateUrl: './service-highlights.component.html',
  styleUrl: './service-highlights.component.css'
})
export class ServiceHighlightsComponent {
  services = [
    { icon: '/assets/service-icon/cup.png', title: 'High Quality', description: 'Created from top materials' },
    { icon:  '/assets/service-icon/cup.png', title: 'Warranty Protection', description: 'Over 2 years' },
    { icon:  '/assets/service-icon/cup.png', title: 'Free Shipping', description: 'Order over $150' },
    { icon:  '/assets/service-icon/cup.png', title: '24/7 Support', description: 'Dedicated support' }
  ];
 constructor() { }

  ngOnInit(): void {
  }
}
