import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoginStatus } from './state/app.reducer';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CryptoApp';
  loggedIn$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.loggedIn$ = this.store.select(getLoginStatus);
  }
}
