import { Component } from '@angular/core';
/* must import router module to navigate pages */
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage {

  constructor(private router: Router) {}

/* function takes user to product screen */
  productpage() {
    this.router.navigate(['/product'])
  }
/* function takes user to account screen */
  accountpage() {
    this.router.navigate(['/account'])
  }
/* function takes user to account screen */
  shoppingcartpage() {
    this.router.navigate(['/shoppingcart'])
  }
}
