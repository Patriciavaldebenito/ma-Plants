// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyBw7TBPNHZ1c8FucPsg6YpupXMuqhVR41E',
    authDomain: 'ma-plants.firebaseapp.com',
    databaseURL: 'https://ma-plants.firebaseio.com',
    projectId: 'ma-plants',
    storageBucket: 'ma-plants.appspot.com',
    messagingSenderId: '325521194729',
    appId: '1:325521194729:web:c42d0f4dc31f10c570fa78'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
