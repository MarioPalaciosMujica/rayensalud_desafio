import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        public translate: TranslateService
    ){
        if(isPlatformBrowser(this.platformId)){
            translate.setDefaultLang('es');
            translate.addLangs(['es'])
        }
    }

  title = 'desafio';
}
