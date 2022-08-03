import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../state/app.state';
import * as AppActions from '../state/app.actions';

import { Login } from '../models/login.models';
import { LoginService } from '../services/login.service';
import { getLoginStatus } from '../state/app.reducer';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MarketDataService } from '../services/marketdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn = false;
  // loginSubscription = new Subscription();

  constructor(
    private loginService: LoginService,
    private marketDataService: MarketDataService,
    private store: Store<AppState>,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    // this.loginSubscription = this.store.select(getLoginStatus).subscribe(
    //   (data: boolean) => {
    //     if (data === true) {
    //       this.router.navigate(['home']);
    //     }
    //   });

    // this.marketDataService.getJSON().subscribe(data => {
    //   console.log(data);
    // });

  }

  ngOnDestroy() {
    // this.loginSubscription.unsubscribe();
  }

  login(username: HTMLInputElement, password: HTMLInputElement) {
    const loginCred: Login = {
      username: username.value,
      password: password.value
    };
    if (this.loginService.validateLogin(loginCred)) {
      this.loggedIn = true;
      username.value = '';
      password.value = '';

      this.router.navigate(['home']);

      this.store.dispatch(AppActions.loginStatusUpdate({ loggedIn: this.loggedIn }));
      // this.store.dispatch(AppActions.loginAction({ login: loginCred }));
    } else {
      alert('Invalid User Name or Password!');
    }
  }
}
