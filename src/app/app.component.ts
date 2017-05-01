import {Component, ViewChild, NgZone} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {CameraPage} from "../pages/camera/camera";
import {AppBrowserPage} from "../pages/app-browser/app-browser";
import {BatteryPage} from "../pages/battery/battery";
import {StatusBarPage} from "../pages/status-bar/status-bar";
import {NetworkPage} from "../pages/network/network";
import { Geolocation } from '@ionic-native/geolocation';
import {GeolocationPage} from "../pages/geolocation/geolocation";
import {GlobalizationPage} from "../pages/globalization/globalization";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  position: any;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Camera', component: CameraPage },
      { title: 'In App Browser', component: AppBrowserPage },
      { title: 'Battery status', component: BatteryPage },
      { title: 'Status bar', component: StatusBarPage },
      { title: 'Network', component: NetworkPage },
      { title: 'Geolocation', component: GeolocationPage },
      { title: 'Globalization', component: GlobalizationPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
