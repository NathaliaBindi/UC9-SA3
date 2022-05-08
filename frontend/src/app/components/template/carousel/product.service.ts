import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productNames: string [] = [
    "XBOX SERIES S 512GB",
    "AMD RYZEN 5 3600",
    "CONTROLE SEM FIO PS5",
    "GABINETE CORSAIR",
    "SSD SAMSUNG EVO 1TB",
  ];

  constructor(private http: HttpClient) { }

  getProductsSmall() {
    return this.http.get<any>('assets/carousel.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
  }

  getProducts() {
    return this.http.get<any>('assets/carousel.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
}

getProductsWithOrdersSmall() {
  return this.http.get<any>('assets/carousel.json')
  .toPromise()
  .then(res => <Product[]>res.data)
  .then(data => { return data; });
}

generatePrduct(): Product {
  const product: Product =  {
      id: this.generateId(),
      name: this.generateName(),
      price: this.generatePrice(),
  };

  product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".png";
  return product;
}

generateId() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  
  return text;
}

generateName() {
  return this.productNames[Math.floor(Math.random() * Math.floor(30))];
}

generatePrice() {
  return Math.floor(Math.random() * Math.floor(299)+1);
}

}
