import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Order } from '../models/order.models';
import { TradeService } from '../services/trade.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$!: Observable<Order[]>;
  orders!: Order[];

  constructor(private tradeService: TradeService) { }

  ngOnInit(): void {
    // this.orders$ = this.tradeService.orders$.pipe(
    //   map((data: Order[]) => {
    //     console.log('enter: ' + data);
    //     return data;
    //   })
    // );

    this.orders = this.tradeService.getOrders();
  }
}