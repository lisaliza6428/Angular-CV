import { Component } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {

  constructor(
    public translate: TranslateLoader,
  ) { }

}
