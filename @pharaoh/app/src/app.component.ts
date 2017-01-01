import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
//  moduleId: module.id.replace('/js/', '/templates/'),
  selector: 'pharaoh-app',
  styleUrls: [],
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/packages">Packages</a>
    <router-outlet></router-outlet>
  `,
//  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'Pharaoh Package Browser';

  constructor(private titleService: Title) { }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
