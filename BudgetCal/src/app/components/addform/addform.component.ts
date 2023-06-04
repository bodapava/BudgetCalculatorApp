import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Budget } from 'src/app/models/budget';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
})
export class AddformComponent implements OnChanges {
  @Output() budgetListEvent = new EventEmitter();
  @Output() balanceCal = new EventEmitter();
  @Input() itemRemoved!: Budget;
  expBalance!: any;
  incBalance!: any;
  balance!: any;
  item: Budget = {};
  budgetList: Budget[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      console.log('propname', changes[propName]);
      const chng = changes[propName];
      const cur = chng.currentValue;
      const prev = chng.previousValue;
      console.log(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
      if (cur)
        this.budgetList = this.budgetList.filter((items) => items != cur);
      console.log('budgetlist rem', this.budgetList, cur);
      this.calculateBalance(this.budgetList);
    }
  }

  addItem(f: Budget) {
    console.log('values are', f);
    let i = 0;
    if (f.description && f.amount) {
      for (let item of this.budgetList) {
        if (item.description === f.description) {
          alert('The budget item already exists, please add a new item!');
          i += 1;
        }
      }
      if (i == 0) this.budgetList.push(f);

      console.log(this.budgetList);

      this.budgetListEvent.emit(this.budgetList);
    }
    this.calculateBalance(this.budgetList);
  }
  calculateBalance(budgetList: Budget[]) {
    if (this.budgetList?.length) {
      console.log('budgetlist', this.budgetList);
      this.expBalance = 0;
      this.incBalance = 0;
      for (let item of this.budgetList) {
        if (!item.isIncome) {
          this.expBalance += item.amount;
        } else {
          this.incBalance += item.amount;
        }
      }
      console.log('expbalance', this.expBalance, this.incBalance);
      if (this.incBalance != 0 || this.expBalance != 0) {
        this.balance = this.incBalance - this.expBalance;
        console.log('balance', this.balance);
        this.balanceCal.emit(this.balance);
      }
    } else {
      this.balanceCal.emit((this.balance = 0));
    }
  }
}
