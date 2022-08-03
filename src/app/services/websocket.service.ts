import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

import { Ticks } from '../models/crypto.models';

const endPoint = 'wss://stream.binance.com:9443/ws/!ticker@arr';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$ = webSocket<Ticks[]>(endPoint);
  public messages$ = this.socket$.asObservable();

  public selectedSymbol$ = new Subject<Ticks>();

  constructor() {
  }

  // public connect(): void {
  //   console.log('in connect');

  //   if (!this.socket$ || this.socket$.closed) {
  //     this.socket$ = this.getNewWebSocket();

  //     console.log(this.socket$);

  //     const messages = this.socket$.pipe(
  //       tap({
  //         error: error => console.log(error)
  //       }),
  //       catchError(_ => EMPTY)
  //     )
  //     console.log(messages);
  //     this.messagesSubject$.next(messages);
  //   }
  // }

  // private getNewWebSocket() {
  //   return webSocket(endPoint);
  // }

  // sendMessage(msg: any) {
  //   this.socket$.next(msg);
  // }

  // close() {
  //   this.socket$.complete();
  // }

  public sendMessage(msg: any) {
    this.socket$.next(msg);
  }
}
