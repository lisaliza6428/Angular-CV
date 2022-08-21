import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routingAnimation } from '../../routing-animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [routingAnimation],
})
export class ProjectsComponent {
  constructor(public translate: TranslateService) {}

  @HostBinding('@routingAnimation') routing = true;
}
