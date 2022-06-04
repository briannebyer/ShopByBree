import { Component } from '@angular/core';
/* must import router module to navigate pages */
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderconfirmed',
  templateUrl: './orderconfirmed.page.html',
  styleUrls: ['./orderconfirmed.page.scss'],
})
export class OrderconfirmedPage {

  constructor(private router: Router) { }

  /* function navigates user to account screen */
  accountpage(){
    this.router.navigate(['/account'])
  }

  /* function takes user to catalogue screen */
  cataloguepage(){
    this.router.navigate(['/catalogue'])
  }
}
