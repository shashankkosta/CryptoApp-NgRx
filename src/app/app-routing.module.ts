import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PositionsComponent } from './positions/positions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'positions', component: PositionsComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
