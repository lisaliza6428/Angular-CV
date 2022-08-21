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
  @HostBinding('@routingAnimation') rooting = true;

  constructor(public translate: TranslateService) {}
}
