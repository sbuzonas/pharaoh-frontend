import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
//  moduleId: module.id.replace('/js/', '/ts/'),
  selector: 'pharaoh-app',
  styleUrls: [],
  template: `<h1>Hello {{name}}</h1>`,
//  templateUrl: 'app.component.html',
})
export class AppComponent {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  title = 'Pharaoh Package Browser';
}
