const baseURL: string = '/js';
const defaultJSExtensions: boolean = true;

const paths: any = {
//  'npm:': '/node_modules/',
  'npm:': 'dist/',
  'unpkg:': 'https://unpkg.com/',
//  'rxjs/*': 'dist/rxjs/*.js',
}

const map: any = {
  // shims
  'core-js-shim': 'unpkg:core-js@^2.4.1/client/shim.min.js',
  'zone': 'unpkg:zone.js@^0.7.2/dist/zone.js',
  'reflect': 'unpkg:reflect-metadata@^0.1.8/Reflect.js',
  'tslib': 'unpkg:tslib@^1.2.0/tslib.js',
  // other libraries
  'rxjs': 'unpkg:rxjs@5.0.1',
}

const packages: any = {
  'rxjs': { main: '/bundles/Rx.min.js', defaultExtension: 'js' },
}

const ngBarrels: string[] = [
  'core',
  'common',
  'compiler',
  'platform-browser',
  'platform-browser-dynamic',
  'http',
  'router',
  'forms',
];

ngBarrels.forEach((ngBarrelName: string) => {
  map['@angular/'+ngBarrelName] = 'npm:@angular/' + ngBarrelName + '/bundles/' + ngBarrelName + '.umd.min.js';
});

const barrels: string[] = [
  'app',
];

const bundles: any = {
}

barrels.forEach((barrelName: string) => {
  packages['@pharaoh/'+barrelName] = { main: 'index', defaultExtension: 'js' };
});

System.config({
  baseURL,
  bundles,
  defaultJSExtensions,
  map,
  packages,
  paths,
})
