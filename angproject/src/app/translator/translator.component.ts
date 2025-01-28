import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent {
  constructor(public translate: TranslateService){}

  switchlanguage(lang:string)
  {
    this.translate.use(lang)
  }
}
