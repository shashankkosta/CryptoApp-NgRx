import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { tap, map, reduce } from 'rxjs/operators';

import { Root, Symbol, Ticks } from '../models/crypto.models';
import { Order } from '../models/order.models';

@Injectable()
export class MarketDataService {
    private baseUrl = 'https://api.binance.com/api/v3';
    // private symbols: Symbol[] = [];
    // private ticker: Ticker[] = [];

    // orders = new Subject<Order>();

    constructor(private http: HttpClient) {
        // this.getJSON().subscribe(data => {
        //     console.log(data);
        // });
    }

    public getJSON(): Observable<any> {
        return this.http.get("../../assets/ticker.json");
    }

    // getSymbols(): Observable<Symbol[]> {
    //     return this.http.get<Root>(this.baseUrl + "/exchangeInfo?symbols=[%22BTCUSDT%22,%22ETHUSDT%22]")
    //         .pipe(
    //             map(data => this.symbols = data.symbols),
    //             tap(data => console.log(JSON.stringify(data))),
    //         );
    // }

    // getProducts(): Observable<string[]> {
    //     // if (this.products) {
    //     //   return of(this.products);
    //     // }
    //     return this.http.get<Root[]>(this.baseUrl + "/exchangeInfo")
    //         .pipe(
    //             map((data: Root) => {
    //                 return reduce(data.symbols;
    //             }),
    //             tap(data => console.log(JSON.stringify(data))),
    //             // tap(data => this.products = data),
    //             // catchError(this.handleError)
    //         );
    // }

    // getOHLC(): Observable<Ticker[]> {
    //     return this.http.get<Ticker[]>(this.baseUrl + "/ticker?symbols=[%22BTCUSDT%22,%22ETHUSDT%22]")
    //         // return this.http.get<Root>(this.baseUrl + "/exchangeInfo")
    //         .pipe(
    //             map(data => this.ticker = data),
    //             tap(data => console.log(JSON.stringify(data))),
    //         );
    // }
}
