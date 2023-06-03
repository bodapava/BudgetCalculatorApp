import { Component, EventEmitter, Output } from '@angular/core';
import { Budget } from 'src/app/models/budget';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  balance!: any;
  balanceColor: boolean = true;
  budgetList!: Budget[];
  changeBalance($event: any) {
    console.log('balance', $event);
    this.balance = $event;
    this.balance > 0 ? (this.balanceColor = true) : (this.balanceColor = false);
  }
  sendBudgetList($event: any) {
    console.log('sendSalaryList', $event);
    this.budgetList = $event;
  }
}
