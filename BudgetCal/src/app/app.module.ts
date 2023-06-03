import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { AddformComponent } from './components/addform/addform.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AddformComponent, BudgetListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
