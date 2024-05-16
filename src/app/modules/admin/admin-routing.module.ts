import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path:'',
    component:AdminLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],//Appmodule un altında çalışacağı için child olarak oluşturdu.
  exports: [RouterModule]
})
export class AdminRoutingModule { }
