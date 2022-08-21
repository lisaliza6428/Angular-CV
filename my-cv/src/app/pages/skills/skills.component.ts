import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
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
export class SkillsComponent implements OnInit, OnDestroy {
  @HostBinding('@routingAnimation') routing = true;

  public json: SkillsModel[];

  public title: string;

  private subscription: Subscription;

  objectValues = Object.values;

  constructor(public translate: TranslateService) {
    this.json = [];
    this.title = '';
    this.subscription = Subscription.EMPTY;
  }

  ngOnInit() {
    this.subscription = this.translate.stream('skills').subscribe((data) => {
      this.json = Object.values(data.skills);
      this.title = data.pageTitle;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
