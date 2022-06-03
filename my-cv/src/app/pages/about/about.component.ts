import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routingAnimation } from '../../routing-animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [routingAnimation],
})
export class AboutComponent {
  @HostBinding('@routingAnimation') public routing: any;

  constructor(public translate: TranslateService) {}
}
