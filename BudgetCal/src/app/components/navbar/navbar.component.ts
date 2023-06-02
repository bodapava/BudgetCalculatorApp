import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() amount: EventEmitter<any> = new EventEmitter();
  @Output() description: EventEmitter<any> = new EventEmitter();
  descriptionMatch(e: any) {
    console.log(e.target.value);
    this.description.emit(e.target.value);
  }
  amountValue(e: any) {
    console.log(e.target.value);
    this.amount.emit(e.target.value);
  }
}
