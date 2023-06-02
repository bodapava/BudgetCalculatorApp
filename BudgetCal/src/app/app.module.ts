import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BalanceComponent } from './components/balance/balance.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BalanceComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
