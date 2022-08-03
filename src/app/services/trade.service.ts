import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Order } from '../models/order.models';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  orders: Order[] = [];
  // orders$ = new Subject<Order[]>();

  constructor() { }

  addOrder(order: Order) {
    this.orders.push(order);
    // this.orders$.next(this.orders);
  }

  getOrders() {
    return this.orders;
    // this.orders$.next(this.orders);
  }
}
