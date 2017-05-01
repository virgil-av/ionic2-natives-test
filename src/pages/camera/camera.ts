import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  images: any[] = [];

  constructor(public navCtrl: NavController, private camera: Camera) {}

  takePhoto(saveToAlbum: boolean, cameraDir: number){
    let options: CameraOptions = {
      quality: 100,
      destinationType: 2,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.images.push(imageData);

      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.images.unshift({
      //   src: base64Image
      // })
    }, (err) => {
      // Handle error
    });
  }

}
