import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductListComponent implements OnInit {

  title: string = 'Products';
  products: Product[] = [];
  constructor(private productService:ProductService){ //Aldığı değişkenin başına erişim belirteci konuursa dependency injection yapmış oluruz.
  
  }
  ngOnInit(): void{ //Sayfa yüklendiğinde
  this.productService.getProducts().subscribe(data=>{
    this.products=data;
  });
}
}

