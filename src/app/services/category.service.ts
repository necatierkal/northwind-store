import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable(
{
  providedIn:'root'
}

)
export class CategoryService {

  constructor(private httpClient:HttpClient) { } //DependencyInjection ile bunu tükettik //Aldığı değişkenin başına erişim belirteci konuursa dependency imjection yapmış oluruz.


  getCategories():Observable<Category[]>{
   return this.httpClient.get<Category[]>("http://localhost:22437/api/Categories"); //Observable kategori array return ettik. Subscribe burada olmadık. 
   //İlgili komponent subscribe olacak. Başka komponentler ihtiyacına göre kullanacak.
}//Observable ve asenkron çalışır. Dolayısıyla (observable dan dolayı) subscribe olduk.
//apiden veri döndürüyoruz. Buradan dönen responsu category array a gönderdik burada.
//Dönen datayı subscribe olup içeriğinde bir fonksiyon tetikleniyor. Bu fonksiyonu delege ile parametre olarak verdik. Dönen data data isimli category array türünde değişkene set edildi.

}
