import { Component, EventEmitter, Output } from '@angular/core';
import { Budget } from 'src/app/models/budget';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
})
export class AddformComponent {
  @Output() budgetListEvent = new EventEmitter();
  item: Budget = {};
  budgetList: Budget[] = [];

  addItem(f: Budget) {
    console.log('values are', f);
    if (f.description && f.amount) {
      this.budgetList.push(f);
      console.log(this.budgetList);
      this.budgetListEvent.emit(this.budgetList);
    }
  }
}
