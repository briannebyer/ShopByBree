import { Component, OnInit, ViewChild } from '@angular/core';
/* must import router module to navigate pages */
import { NavigationExtras, Router } from '@angular/router';

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

  // able to navigate between pages
  constructor(private router: Router) { }

  // finds users location and places marker
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
          content:'<div>view details</div>'
          
        });
      
        // when marker is clicked, navigates to shipping details
       google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
          this.shippingdetails(pos.lat,pos.lng)
        });

      });
    } else {
      alert('Geolocation not supported');
    }
    
  }
      /* function navigates user to account screen */
      accountpage(){
        this.router.navigate(['/account'])
      }
    
      /* function takes user to catalogue screen */
      cataloguepage(){
        this.router.navigate(['/catalogue'])
      }

      /* function takes user to shipping details, showing the default lat and lng */
      shippingdetails(lat,lng){
        // this.router.navigate(['/shippingdetails', lat, lng])
        this.router.navigate(['/shippingdetails'])
      }
      

}
