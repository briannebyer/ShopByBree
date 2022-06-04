import { Component } from '@angular/core';
/* must import router module to navigate pages */
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage {

  constructor(private router: Router) { }

  /* function navigates user to shopping cart screen */
  shoppingcartpage() {
    this.router.navigate(['/shoppingcart'])
  }

}
