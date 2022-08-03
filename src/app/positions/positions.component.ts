import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Ticks } from '../models/crypto.models';
import { Order, Position } from '../models/order.models';
import { TradeService } from '../services/trade.service';
import { WebSocketService } from '../services/websocket.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  ticks$!: Observable<Ticks[]>;
  orders: Order[] = [];
  positions: Position[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
