import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/state/app.state';
import { getCurrentSymbol } from 'src/app/state/app.reducer';

import { Symbol } from 'src/app/models/crypto.models';


@Component({
  selector: 'app-crypto-ohlc',
  templateUrl: './crypto-ohlc.component.html',
  styleUrls: ['./crypto-ohlc.component.css']
})
export class CryptoOhlcComponent implements OnInit {
  selectedSymbol$!: Observable<Symbol | null>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.selectedSymbol$ = this.store.select(getCurrentSymbol);
  }

  onBuySell(orderType: string, qty: HTMLInputElement) {
    // const newOrder: Order = {
    //   id: this.tradeService.orders.length + 1,
    //   symbol: this.selectedSymbol.s,
    //   orderType: orderType,
    //   entryPrice: +this.selectedSymbol.c,
    //   exitPrice: 0,
    //   quantity: +qty.value,
    //   timestamp: Date.now()
    // }
    // this.tradeService.addOrder(newOrder);

    alert('Order placed successfully!');

    qty.value = '';
    qty.focus();
  }
}
