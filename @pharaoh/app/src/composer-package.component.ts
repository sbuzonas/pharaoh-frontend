import { Component, OnInit } from '@angular/core';

import { ComposerPackage } from './composer-package';
import { ComposerPackageService } from './composer-package.service';

@Component({
  selector: 'packages',
  styleUrls: [],
  template: `
    <h2>New Packages</h2>
    <ul class="packages">
      <li *ngFor="let composerPackage of composerPackages"
        [class.selected]="composerPackage === selectedPackage"
        (click)="onSelect(composerPackage)">
        <span class="badge">{{composerPackage.name}}</span> {{composerPackage.description}}
      </li>
    </ul>
    <package-detail [composerPackage]="selectedPackage"></package-detail>
  `,
})
export class ComposerPackageComponent implements OnInit {
  selectedPackage: ComposerPackage;
  composerPackages: ComposerPackage[];

  constructor(private packageService: ComposerPackageService) { }

  onSelect(composerPackage: ComposerPackage): void {
    this.selectedPackage = composerPackage;
  }

  getPackages(): void {
    this.packageService.getPackages().then(composerPackages => this.composerPackages = composerPackages);
  }

  ngOnInit(): void {
    this.getPackages();
  }
}
