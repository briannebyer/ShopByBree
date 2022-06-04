import { Component} from '@angular/core';
/* must import router module to navigate pages */
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.page.html',
  styleUrls: ['./shoppingcart.page.scss'],
})
export class ShoppingcartPage {

  constructor(private router: Router) {}

  /* function navigates user to order confirmed */
  orderconfirmedpage(){
    this.router.navigate(['/orderconfirmed'])
  }
  
  /* function takes user to catalogue screen */
  cataloguepage(){
    this.router.navigate(['/catalogue'])
  }
  
}
