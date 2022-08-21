import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  public activeLink: string;

  public links: string[];

  public linksTitle: string[];

  private subscription: Subscription;

  constructor(private router: Router, private translate: TranslateService, private locationStr: LocationStrategy) {
    this.activeLink = '';
    this.links = [];
    this.linksTitle = [];
    this.subscription = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.subscription = this.translate.stream('nav').subscribe((data: string[]) => {
      this.links = Object.keys(data);
      this.linksTitle = Object.values(data);
    });
    this.switchLocationPath();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private switchLocationPath() {
    const path = this.locationStr.path().slice(1);
    if (path === '') {
      this.activeLink = 'about';
    } else {
      this.activeLink = path;
    }
  }

  public selectLinkItem(item: string): void {
    this.activeLink = item;
  }

  public switchLang(e: Event): void {
    const lang = (<HTMLSelectElement>e.target).value;
    switch (lang) {
      case 'en': {
        this.translate.use('en');
        break;
      }
      case 'be': {
        this.translate.use('be');
        break;
      }
      case 'ru': {
        this.translate.use('ru');
        break;
      }
    }
  }
}
