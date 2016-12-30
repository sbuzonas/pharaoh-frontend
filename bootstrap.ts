import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@pharaoh/app';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((error) => console.log(
        "An error occurred bootstrapping the application: ", error
    ));
