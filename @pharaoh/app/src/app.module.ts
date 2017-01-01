import { NgModule }             from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule }         from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ComposerPackageComponent } from './composer-package.component';
import { ComposerPackageService } from './composer-package.service';
import { PackageDetailComponent } from './package-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'packages',
        component: ComposerPackageComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ComposerPackageComponent,
    PackageDetailComponent
  ],
  providers: [
    Title,
    ComposerPackageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
