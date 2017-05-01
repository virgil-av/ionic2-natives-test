import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Globalization } from '@ionic-native/globalization';


@Component({
  selector: 'page-globalization',
  templateUrl: 'globalization.html'
})
export class GlobalizationPage {
  showGlobalization: any = {};

  constructor(public navCtrl: NavController, private globalization: Globalization) {

  }

  ngAfterViewInit() {
    this.geGlobalization();
  }

  geGlobalization(){
    this.globalization.getPreferredLanguage()
      .then(res => {
        this.showGlobalization.language = JSON.stringify(res);
      })
      .catch(e => console.log(e));

    this.globalization.getCurrencyPattern('GBP')
      .then(res => {
        this.showGlobalization.currency = JSON.stringify(res);
      })
      .catch(e => console.log(e));

    this.globalization.getLocaleName()
      .then(res => {
        this.showGlobalization.localName = JSON.stringify(res);
      })
      .catch(e => console.log(e));

    this.globalization.getDateNames({type:'wide', item:'months'})
      .then(res => {
        this.showGlobalization.calendar = JSON.stringify(res);
      })
      .catch(e => console.log(e));




  }
}
