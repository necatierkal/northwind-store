import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductListComponent implements OnInit {

  title: string = 'Products';
  products: Product[] = [];
  constructor(private productService:ProductService,
              private route:ActivatedRoute //Bize aktifleştirilmiş rotayla ilgili tüm bilgerli verir. Dependency injection ile aldık.
  ){ //Aldığı değişkenin başına erişim belirteci konuursa dependency injection yapmış oluruz.
  
  }
  //Sayfa yüklendiğinde
  ngOnInit(): void { 
    //let categoryId=this.route.snapshot.params["categoryId"]; //Route parametresi olarak yolladık o yüzden params dedik. Category id parametresinin snaphotindan verisini yani id ini oku dedik.
    this.route.params.subscribe(param=>{
      let categoryId = param['categoryId']
      let obsProducts = categoryId? this.productService.getProductsByCategoryId(categoryId) : this.productService.getProducts(); 
      //categoryId yi null kontrolü yaptık. değeri doluysa true döner. Dolayısıyla null kontrolü yapmış olduk. 

        obsProducts.subscribe(data=>{
        this.products=data;
    }
        
    ); //route parametreleri observable olduğu için subscribe olduk ve ilk tanimladığımız snapshotli yöntemi kapattık, sayfa postback olmadığı için url de id değişikliğini almasına rağmen veriyi getirmiyordu.
    //observable bir şekilde alırsak subscrbe olduğumuzda değişiklikler yansıdı.
    //Docheck kullanmayarak oninit e yazmamızın sebebi ; docheck her değişiklikte apiden getirir. Maliyetli işlemlerde docheck e yazmıyoruz.
      
  });
}
}

