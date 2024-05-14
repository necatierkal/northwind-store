import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class CategoryListComponent implements OnInit{

title: string = 'Categories';
categories: Category[] = [];
constructor(private httpClient:HttpClient){ //Aldığı değişkenin başına erişim belirteci konuursa dependency imjection yapmış oluruz.

}
ngOnInit(): void{ //Sayfa yüklendiğinde
this.httpClient.get<Category[]>("http://localhost:22437/api/Categories").subscribe(data=>{
  this.categories=data;
});//Observable ve asenkron çalışır. Dolayısıyla (observable dan dolayı) subscribe olduk.
 //apiden veri döndürüyoruz. Buradan dönen responsu category array a gönderdik burada.
 //Dönen datayı subscribe olup içeriğinde bir fonksiyon tetikleniyor. Bu fonksiyonu delege ile parametre olarak verdik. Dönen data data isimli category array türünde değişkene set edildi.
}
}



// typscriptte soyut nesneleri implement ile soyut nesneleri exten ederiz.