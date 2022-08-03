import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { getLoginStatus } from "../state/app.reducer";
import { AppState } from "../state/app.state";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    isLoggedIn = false;

    constructor(private store: Store<AppState>) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        this.store.select(getLoginStatus).subscribe(data => { this.isLoggedIn = data });
        return this.isLoggedIn;
    }
}