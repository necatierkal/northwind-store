import { Component } from '@angular/core';

@Component({ //Dekaratörler metadata dır.
  selector: 'app-root', //html taginde nasıl ifade edilip çağırılacağı. (AppComponenti html tagi olarak app-root selectorüyle çağırılır <app-root>)
  templateUrl: './app.component.html', //Her template kendi componentinde çalışır. Başka component tarafından kullanılamaz.
  styleUrl: './app.component.css'
})//Bir component iki şekilde render edilir. Bir tanesi html elementi olarak, diğeri ise route vasıtasıyla.
export class AppComponent {
  title = 'northwind-store';
}
