import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routingAnimation } from '../../routing-animation';
interface SkillsModel {
  title: string;
  list: {
    [key: string]: string;
  }[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [routingAnimation],
})
export class SkillsComponent {
  @HostBinding('@routingAnimation') public routing: any;

  json!: SkillsModel[];

  title: string = '';

  objectValues = Object.values;

  constructor(public translate: TranslateService) {
    this.translate.stream('skills').subscribe((data) => {
      this.json = Object.values(data.skills);
      this.title = data.pageTitle;
    });
  }
}
