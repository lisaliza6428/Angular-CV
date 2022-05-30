import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-checkbox',
  templateUrl: './lang-checkbox.component.html',
  styleUrls: ['./lang-checkbox.component.scss']
})
export class LangCheckboxComponent {

  constructor(
    public translate: TranslateService,
  ) { }

  checkLang(e: Event){
    const isChecked = (<HTMLInputElement>e.target).checked;
    isChecked ? this.translate.use('en') : this.translate.use('ru');
  }
}
