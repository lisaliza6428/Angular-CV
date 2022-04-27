import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  json: any;
  title: string = '';

  objectValues = Object.values;

  constructor(public translate: TranslateService) {
    this.translate.stream('skills').subscribe(data => {
      this.json = Object.values(data.skills);
      this.title = data.pageTitle;
    });
  }

  ngOnInit(): void {
  }

}
