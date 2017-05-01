import {Component, NgZone} from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';

@Component({
  selector: 'page-battery',
  templateUrl: 'battery.html'
})
export class BatteryPage {
  battLVL: any;
  battSTAT: any;
  subscription: any;

  constructor(public navCtrl: NavController, private batteryStatus: BatteryStatus, private ngZone: NgZone) {
    this.checkBattery();
  }



  checkBattery(){
    this.subscription = this.batteryStatus.onChange().subscribe(
      (status: BatteryStatusResponse) => {
        console.log(status.level, status.isPlugged);

        this.ngZone.run(() => {
          this.battLVL = status.level;
          this.battSTAT = status.isPlugged;
        })

      })
  }

  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }



}
