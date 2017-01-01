import { Component, Input } from '@angular/core';

import { ComposerPackage } from './composer-package';

@Component({
  selector: 'package-detail',
  template: `
  <div *ngIf="composerPackage">
    <h2>{{composerPackage.name}} details!</h2>
    <div><label>Name: </label>{{composerPackage.name}}</div>
    <div>
      <label>Description: </label>{{composerPackage.description}}
    </div>
  </div>
`,
})
export class PackageDetailComponent {
  @Input()
  composerPackage: ComposerPackage;
}
