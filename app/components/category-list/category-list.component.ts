import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default//,
  //providers: [CategoryService] //Component e ekledik instance lifecycle ını transcient gibi davranır burası. Lifecycle eklemezsek instance yokmuş gibi hata alırız.
  //Burayı yoruma aldık çünkü servisin içinde root çağırıldığında üretilsin dedik. Yani singleton
})
export class CategoryListComponent implements OnInit{

title: string = 'Categories';
categories: Category[] = [];
constructor(private categoryService:CategoryService){ } //Dependency injection ile CategoryService instance ı oluşturuldu.
ngOnInit(): void{ //Sayfa yüklendiğinde
  this.categoryService.getCategories().subscribe(data=>{ //Oluşturduğumuz instance ile dönen datayı burada alıp categories arrayine atadık.
    this.categories=data;
  })
} 






}



// typscriptte soyut nesneleri implement ile soyut nesneleri exten ederiz.