import { Component, OnInit } from '@angular/core';
// for pos.lat and pos.lng from orderconfirmed page
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shippingdetails',
  templateUrl: './shippingdetails.page.html',
  styleUrls: ['./shippingdetails.page.scss'],
})
export class ShippingdetailsPage implements OnInit {

  sub: any;
  lat: any;
  lng: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.lat = params['lat'];
      this.lng = params['lng'];
    });
  
    }

}
