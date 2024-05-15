import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
//Sınıfın module,component ya da ne olacağını bu decaratorler vasıtasıyla belirleriz. Bu dekaratör bu classı module yapmış.
//Module .Net teki kütüphane yapısının aynısıdır. yani belli bir ihtiyacı karşılayan nesnelerin bir araya geldiği kütüphane olarak tanımlanabilir.
//Farklı bir işlevi bir modül yapar.

@NgModule({ 
  declarations: [ //Bu modülün hangi nesnelerden oluştuğunu burada bildiriyoruz. Bir component bir modüle deklare edilebilir. 
    AppComponent, MenuComponent, CategoryListComponent, ProductListComponent, MyCartComponent, NotFoundComponent, MainLayoutComponent
  ],
  imports: [ //Component bir modülde deklare edilebildiği için başka yerde kullanma ihtiyacı olduğunda; buraya yaılır. Modül başka modüllerde import edilebilir ve bu şekilde kullanılabilir.
    BrowserModule, //Bir modül başka bir modülü tüketecekse import edilir.
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot([
     
    // ]) //route tanımı yapacaksak bu modül import edilmeli Bunlar birer library gibi düşünüp projeye dahil ediyoruz.  Başta buraya yazdık fakat buradan yönetilmesi zor. Approuting module e taşıdık.
    
  ],
  providers: [], //Angular ın IOC container ı burasıdır. .net te adscope,addtranscient diye ekliyorduk bağımlılıkları. Bağımlıklar angularda buraya eklenecek. //Null injector hatası alırsak bağımlılıkları buraya yazmadığımız anlamına gelir.
  bootstrap: [AppComponent] //Uygulama ayağa kalkarken main.ts AppModule i çağırır. Bu satır AppComponent in html ini çağırır. Component web sayfalarımızın görüntüsünü oluşturan en küçük bileşen. Uygulamalar bileşen tabanlı geliştirilebilir.
})
export class AppModule { } // Component in oluştuğu 3 bileşenden class buradadır.

//Bir component olmazsa olmaz üç bileşenden oluşur. 
//1-Template : Görünüm (Html verisi)
//2-Class : Template in içeridiği veri ve iş kurallarını içerir
//3-Metadata : İlgili class ı component yapan ve bu class ın spesifik özelliklerini barındırır.


