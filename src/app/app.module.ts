import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CameraPage} from "../pages/camera/camera";
import {Camera} from "@ionic-native/camera";
import {AppBrowserPage} from "../pages/app-browser/app-browser";
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { File } from '@ionic-native/file';
import {BatteryPage} from "../pages/battery/battery";
import { BatteryStatus } from '@ionic-native/battery-status';
import {StatusBarPage} from "../pages/status-bar/status-bar";
import {NetworkPage} from "../pages/network/network";
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import {GeolocationPage} from "../pages/geolocation/geolocation";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import {GlobalizationPage} from "../pages/globalization/globalization";
import { Globalization } from '@ionic-native/globalization';
import { CameraPreview } from '@ionic-native/camera-preview';
import {InAppCameraPage} from "../pages/inapp-camera/inapp-camera";
import {TesseractPage} from "../pages/tesseract/tesseract";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    AppBrowserPage,
    BatteryPage,
    StatusBarPage,
    NetworkPage,
    GeolocationPage,
    GlobalizationPage,
    InAppCameraPage,
    TesseractPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    AppBrowserPage,
    BatteryPage,
    StatusBarPage,
    NetworkPage,
    GeolocationPage,
    GlobalizationPage,
    InAppCameraPage,
    TesseractPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    InAppBrowser,
    File,
    BatteryStatus,
    Network,
    Geolocation,
    GoogleMaps,
    Globalization,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
