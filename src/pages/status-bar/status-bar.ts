import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";

@Component({
  selector: 'page-status-bar',
  templateUrl: 'status-bar.html'
})
export class StatusBarPage {

  constructor(public navCtrl: NavController, private statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString(this.getRandomColor());
  }

  generateNewColor(){
    this.statusBar.backgroundColorByHexString(this.getRandomColor());
  }


  getRandomColor() {
    let letters = '6666666789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
