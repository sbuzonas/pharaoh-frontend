import { Injectable } from '@angular/core';

import { ComposerPackage } from './composer-package';
import { NEW_PACKAGES } from './mock-packages';

@Injectable()
export class ComposerPackageService {
  getPackages(): Promise<ComposerPackage[]> {
    return Promise.resolve(NEW_PACKAGES);
  }
}
