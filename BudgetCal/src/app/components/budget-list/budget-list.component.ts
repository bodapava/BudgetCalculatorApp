import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Budget } from 'src/app/models/budget';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
})
export class BudgetListComponent {
  @Input() budgetList!: Budget[];
  @Output() itemRemovedEvent = new EventEmitter();
  isHidden = false;
  itemRemoved(item: Budget) {
    console.log('item removed', item);
    this.budgetList = this.budgetList.filter((items) => items != item);
    console.log(this.budgetList);
    this.itemRemovedEvent.emit(item);
  }
}
