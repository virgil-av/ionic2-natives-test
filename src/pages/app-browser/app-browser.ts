import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-app-browser',
  templateUrl: 'app-browser.html'
})
export class AppBrowserPage {


  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }

 openBrowser(){
    let browser = this.iab.create('https://bcsg.com');
    browser.show();
 }

}
