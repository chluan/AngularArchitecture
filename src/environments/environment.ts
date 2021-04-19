// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
      config: {
          apiKey: 'AIzaSyCc9d2CENdoXER8g3vOypwR7sEMBjn-sOo',
          authDomain: 'courseapp-ee06f.firebaseapp.com',
          projectId: 'courseapp-ee06f',
          storageBucket: 'courseapp-ee06f.appspot.com',
          messagingSenderId: '578779583431',
          appId: '1:578779583431:web:fca4942e00a6afccbebfe2'
      }
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
