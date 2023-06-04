import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Budget } from 'src/app/models/budget';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  balance!: any;
  budgetList!: Budget[];
  itemRemoved!: Budget;
  public constructor(private changeDetector: ChangeDetectorRef) {}
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  changeBalance($event?: any) {
    console.log('balance in navbar', $event);
    this.balance = $event;
  }
  sendBudgetList($event: any) {
    console.log('sendSalaryList', $event);
    this.budgetList = $event;
  }
  itemRemovedCal($event: Budget) {
    console.log('rmeoved item', $event);
    this.itemRemoved = $event;
  }
}
