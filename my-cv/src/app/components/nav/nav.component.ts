import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeLink: string = '';

  links: string[] = [];

  linksTitle: string[] = [];

  constructor(public router: Router, public translate: TranslateService, public locationStr: LocationStrategy) {
    this.translate.stream('nav').subscribe((data: any) => {
      this.links = Object.keys(data);
      this.linksTitle = Object.values(data);
    });
  }

  ngOnInit(): void {
    const path = this.locationStr.path().slice(1);
    if (path === '') {
      this.activeLink = 'about';
    } else {
      this.activeLink = path;
    }
  }

  onSelectItem(item: string): void {
    this.activeLink = item;
  }
}
