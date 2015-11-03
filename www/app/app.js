import {App, Platform, StatusBar} from 'ionic/ionic';
import {List} from './list/list';
import {Core} from './services/core';

@App({
  template: '<ion-nav [root]="root"></ion-nav>' +
  '<ion-overlay></ion-overlay>',
  providers:[Core]
})

export class AppCmp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = List;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }
}
