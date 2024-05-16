import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:22437/api/Products"); 
}

getProductsByCategoryId(categoryId:number):Observable<Product[]>{
  return this.httpClient.get<Product[]>(`http://localhost:22437/api/Categories/${categoryId}/products`); //altgr+;; interpolation yapacaksak tek tırnak veya çift tırnak olmaz. Bu işarete yazılmalı.(Interpolation ${categoryId})
 }

}