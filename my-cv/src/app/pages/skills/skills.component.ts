import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
})
export class SkillsComponent {
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
