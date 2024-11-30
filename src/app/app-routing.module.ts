import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { MealManagementComponent } from './meal-management/meal-management.component';
import { ExpenseManagementComponent } from './expense-management/expense-management.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'users', component: UserManagementComponent },
  { path: 'meals', component: MealManagementComponent },
  { path: 'expenses', component: ExpenseManagementComponent },
  { path: 'report', component: ReportComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/users' } // Wildcard route for invalid URLs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
