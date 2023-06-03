import { Component, Input } from '@angular/core';
import { Budget } from 'src/app/models/budget';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
})
export class BudgetListComponent {
  @Input() budgetList!: Budget[];
  balance!:any;

  constructor(){
    if(this.budgetList.length){
      for(let item in this.budgetList){
        if(item.is)
      }
    }
  }
}
