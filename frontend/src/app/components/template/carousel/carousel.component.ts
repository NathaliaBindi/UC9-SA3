import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  products: Product[] = [];
  responsiveOptions;


  constructor(private ProductService: ProductService ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
    this.ProductService.getProductsSmall().then (products => {
      this.products = products;
    });
  }

}
