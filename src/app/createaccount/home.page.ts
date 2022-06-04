import { Component } from '@angular/core';
/* must import router module to navigate pages */
import { Router } from '@angular/router';
/* required module to create a form in angular (for displaying user input to account page)*/
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

/* inital value of inputs on create account screen, binded through ngModel */
phonenumber:number = 0 ;
password:string = '';

/* inject router so that is it available in the class */
  constructor(private router: Router) {}

 /* function takes user to catalogue screen */
  cataloguepage(){
    this.router.navigate(['/catalogue'])
  }
}
