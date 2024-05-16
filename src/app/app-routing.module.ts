import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 // {
      //   path:'', 
      //   component:ProductListComponent  //Hiçbir route tanımı yazmadığım zaman ürünler yüklensin. 
      // },
      {
        path:'', 
        pathMatch:'full', //url de eşit path e bak. Yapılan route buna eşit mi? Routeların sırası önemli.
        redirectTo:'urunler'  //Hiçbir route tanımı yazmadığım zaman ürünlere redirect et. 
      },
      {
        //rootta admin çağırıldığında lazy load ile yani ihtiaç olduğunda(çağırıldığında) belirtilen path teki modülü yükler ve route eder. Açılacak tüm modüller bu şekilde çağırılırsa
        //bir seferde herşeyi yüklemez boyut daha küçük, sayfa daha hızlı olur.
        path:'admin',
        loadChildren:()=>import('./modules/admin/admin.module').then(t=>t.AdminModule)
      },
      {
        path:'login',
        component: LoginComponent //Login component i direkt olarak appmodule altından route edilecek.
      },
      {
        //Buraya yazılanlar birşeyin child i olarak belirtilmediyse appcomponentin child ıdır.
        path:'',//Route tanımları parent tan child a doğrudur. Bu yüzden Burayı boş bıraktık. Burası boş olduğu için direk /urunler veya /sepetim olarak çağırabiliriz aşağıdakileri.
        component: MainLayoutComponent,
        children:[ 
          {
            path:'urunler', 
            component:ProductListComponent
          } ,
          {
            path:'urunler/:categoryId', 
            component:ProductListComponent
          } ,
          {
            path:'sepetim', 
            component:MyCartComponent 
          },  
        ]
      },    
      {
        path:'**', //bütün routeları kabul et dedik. Yukarıdaki routeların hiçbirine girmezse Buraya gel dedik.      
        component:NotFoundComponent  //Hiçbir route tanımı yazmadığım zaman  Not found a git. 
      }
];//Routeları app. module.ts altından buraya taşıdık. Burasının işi, buradan yönetimi daha doğru

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Modülümün ihtiyaç duyduğu diğer nesnelere erişim için import etmek gerek.Ana route tanımları burada yapılır her zaman. appcomponent altında render eder ana routeları
  exports: [RouterModule] //Bu modülün ilgili nesnelerini beni import eden modüle de import et demek export. 
})
export class AppRoutingModule { }
