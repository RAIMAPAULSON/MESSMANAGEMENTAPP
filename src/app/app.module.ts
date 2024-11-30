import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { MealManagementComponent } from './meal-management/meal-management.component';
import { ExpenseManagementComponent } from './expense-management/expense-management.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    MealManagementComponent,
    ExpenseManagementComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
