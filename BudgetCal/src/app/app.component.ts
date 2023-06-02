import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BudgetCal';
  amount: any;
  printAmount(amt: any) {
    console.log('value', amt);
    this.amount = amt;
  }
}
