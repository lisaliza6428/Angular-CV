import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  activeLink: string = '';
  links: string[] = [];
  linksTitle: string[] = [];

  constructor(
    router: Router,
    location: Location,
    public translate: TranslateService
  ) {
    this.translate.stream('nav').subscribe((data: any) => {
      this.links = Object.keys(data);
      this.linksTitle = Object.values(data);
    });
  }

  ngOnInit(): void {
    const path = location.pathname.slice(1);
    this.activeLink = path;
  }

  onSelectItem(item: string): void {
    this.activeLink = item;
  }
}
