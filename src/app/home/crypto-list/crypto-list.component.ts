import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AppState } from '../../state/app.state';
import * as AppActions from '../../state/app.actions';

import { Ticks } from '../../models/crypto.models';
import { WebSocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {
  ticks$!: Observable<Ticks[]>;
  selectedTick!: Ticks;

  constructor(
    private store: Store<AppState>,
    private wsService: WebSocketService) { }

  ngOnInit(): void {
    this.ticks$ = this.wsService.messages$.pipe(
      map((data: Ticks[]) => {
        data = data.filter(x => x.s === 'ETHUSDT' || x.s === 'BTCUSDT');

        // if (this.selectedTick) {
        //   this.selectedTick = data.filter(x => x.s === this.selectedTick.s)[0];
        // }

        return data;
      }),
      tap((data: Ticks[]) => {
        let symbols = data.map((tick) => {
          return {
            symbol: tick.s,
            open: tick.o,
            high: tick.h,
            low: tick.l,
            close: tick.c,
          }
        });

        this.store.dispatch(AppActions.updateOHLC({ ticks: symbols }));
      })
    );
  }

  onSelect(data: Ticks) {
    this.selectedTick = data;
    this.store.dispatch(AppActions.setCurrentSymbol({ symbol: this.selectedTick.s }));
  }
}
