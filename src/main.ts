import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) //En önde yüklediği modül AppModule
  .catch(err => console.error(err)); //Hata varsa console da error olarak kırmızı gösterir



  // Standalone false dediğimiz için componenti burada import etmedi. Yani bir componentle başlamadık