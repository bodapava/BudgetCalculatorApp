import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent {
  @Input() balance: any;
  balanceColor: boolean = true;
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      console.log('propname', changes[propName]);
      const chng = changes[propName];
      const cur = chng.currentValue;
      const prev = chng.previousValue;
      console.log(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
      if (cur) console.log('budgetlist rem', cur);
      // this.calculateBalance(this.budgetList);
      cur > 0 ? (this.balanceColor = true) : (this.balanceColor = false);
    }
  }
}
