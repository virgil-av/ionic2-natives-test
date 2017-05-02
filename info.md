1. Android SDK
2. NodeJS 6
3. Ionic framework: npm install -g cordova ionic
4. ionic platform add android
5. beware of outdated @ionic-native compared to plugins
6. all native elements need to be imported in app.module as providers
7. Install Java
8. Change detections only with ngZones
9. Camera preview: https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview/issues/247 

Native:
- Camera allplat
ionic plugin add --save cordova-plugin-camera
npm install --save @ionic-native/camera

- File All plat
ionic plugin add --save cordova-plugin-file
npm install --save @ionic-native/file

-file path android plat
ionic plugin add --save cordova-plugin-filepath
npm install --save @ionic-native/file-path

-file transfer all plat
ionic plugin add --save cordova-plugin-file-transfer
npm install --save @ionic-native/transfer


ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyBkIAFOAuMSBMheZmo39ecStR4guLZqpLA" --variable API_KEY_FOR_IOS="AIzaSyCzjIpvpWiHeUSs1_arm2myXWytFppU4y8"
Notes:

6

If you have android studio installed within your system, then copy the templates folder from
C:\Program Files\Android\Android Studio\plugins\android\lib\templates
and paste it in the folder
C:\Users\user-name\AppData\Local\Android\sdk\tools
