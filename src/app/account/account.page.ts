import { Component, OnInit } from '@angular/core';
/* must import router module to navigate pages */
import { Router } from '@angular/router';

// required to update profile picture
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  imgRes: any;
  options: any;

  constructor(private router: Router, private imgPicker: ImagePicker) { }

 /* function takes user to catalogue screen */
  cataloguepage(){
    this.router.navigate(['/catalogue'])
  }

  /* function takes user to tailored experience screen */
  tailoredpage(){
    this.router.navigate(['/tailoredexperience'])
  }
  // function takes user to image picker
  imagePicker(){
    this.options = {
      width: 200,
      quality: 30,
      outputType: 1
    };

    this.imgRes = [];
    this.imgPicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imgRes.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (error) => {
      alert(error);
    });
  }
}
  
