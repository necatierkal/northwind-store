import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductListComponent implements OnInit {

  title: string = 'Products';
  products: Product[] = [];
  constructor(private httpClient:HttpClient){ //Aldığı değişkenin başına erişim belirteci konuursa dependency imjection yapmış oluruz.
  
  }
  ngOnInit(): void{ //Sayfa yüklendiğinde
  this.httpClient.get<Product[]>("http://localhost:22437/api/Products").subscribe(data=>{
    this.products=data;
  });
}
}
