import {Component, NgZone, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;
  displayValues: any = {};

  constructor(public navCtrl: NavController,
              private geolocation: Geolocation,
              private ngZone: NgZone,
              private googleMaps: GoogleMaps) {

  }

  // Load map only after view is initialized
  ngAfterViewInit() {
    this.loadMap();
  }






  loadMap() {

      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        this.displayValues.lat = resp.coords.latitude;
        this.displayValues.lon = resp.coords.longitude;

        //map method
        let location = new LatLng( resp.coords.latitude,resp.coords.longitude);

        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });

        this.map.setClickable(false);

        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          console.log('Map is ready!');
        });

      }).catch((error) => {
        console.log('Error getting location', error);
      });




  }



}
