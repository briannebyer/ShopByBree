import { Component, OnInit, ViewChild } from '@angular/core';
/* must import router module to navigate pages */
import { Router } from '@angular/router';

//  to be able to reference google API
declare let google: any;

@Component({
  selector: 'app-orderconfirmed',
  templateUrl: './orderconfirmed.page.html',
  styleUrls: ['./orderconfirmed.page.scss'],
})
export class OrderconfirmedPage implements OnInit {
  @ViewChild('map',{static:true}) mapElement;
  map: any;
  constructor() {}

  ngOnInit() {
    console.log('ng OnInit MapPage');
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
     center: latLng,
     zoom: 15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
     };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        
        this.map.setCenter(pos);
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
        });
       
        let infoWindow = new google.maps.InfoWindow({
          content: '<div> <h3 style="color:blue" >2701ICT Headquarters </h3> </div>'
        });
      
       google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        });

      });
    } else {
      alert('Geolocation not supported');
    }

    
  
    
  
  }

}
