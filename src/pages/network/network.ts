import {Component, NgZone} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-network',
  templateUrl: 'network.html'
})
export class NetworkPage {
  online: boolean = false;
  connectionType: string = 'detecting';
  connected: any;
  disconnected: any;

  constructor(public navCtrl: NavController,
              private network: Network,
              private ngZone: NgZone,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad(){
      this.watchforDisconnect();
      this.watchforConnection();
  }

  watchforDisconnect(){
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      let toast = this.toastCtrl.create({
        message: 'no connection available!',
        duration: 2500,
        position: 'top'
      });
      toast.present();
    });
    return disconnectSubscription;   ///// returning value to be used for unsubscribe
  }

  watchforConnection(){
    let connectSubscription = this.network.onConnect().subscribe(() => {
      let toast = this.toastCtrl.create({
        message: 'we\'re back online',
        duration: 2500,
        position: 'top'
      });
      toast.present();

      setTimeout(() => {                             //////// i wrote this just for testing
        if (this.network.type === 'wifi'){
          this.connectionType = "we've got wifi";
        } else if (this.network.type === '2g'){
          this.connectionType = "we've got 2g connection";
        } else if (this.network.type === '3g'){
          this.connectionType = "we've got 3g connection";
        } else if (this.network.type === '4g'){
          this.connectionType = "we've got 4g connection";
        } else if (this.network.type === 'cellular'){
          this.connectionType = "we've got cellular connection";
        } else if (this.network.type === 'unknown'){
          this.connectionType = "unknown network";
        } else if (this.network.type === 'ethernet'){
          this.connectionType = "we've got ethernet connection";
        } else if (this.network.type === 'none'){
          this.connectionType = "none";
        } else {
          this.connectionType = "type is empty bro";
        }
      }, 3000);
    });
    return connectSubscription;
  }



  ionViewWillLeave(){
    this.disconnected.unsubscribe();
    this.connected.unsubscribe();
  }


}
