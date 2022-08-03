import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CryptoListComponent } from './home/crypto-list/crypto-list.component';
import { OrdersComponent } from './orders/orders.component';
import { PositionsComponent } from './positions/positions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CryptoOhlcComponent } from './home/crypto-ohlc/crypto-ohlc.component';

import { MarketDataService } from './services/marketdata.service';
import { WebSocketService } from './services/websocket.service';
import { TradeService } from './services/trade.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { appReducer } from './state/app.reducer';
import { AppState } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CryptoListItemComponent } from './home/crypto-list/crypto-list-item/crypto-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CryptoListComponent,
    OrdersComponent,
    PositionsComponent,
    NavbarComponent,
    CryptoOhlcComponent,
    LoginComponent,
    CryptoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('state', appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    MarketDataService,
    WebSocketService,
    TradeService,
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
