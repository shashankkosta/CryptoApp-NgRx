import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { mergeMap, map, catchError, concatMap } from "rxjs/operators";
import { of } from 'rxjs';

import * as AppActions from '../state/app.actions';
import { WebSocketService } from "../services/websocket.service";
import { LoginService } from "../services/login.service";

@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private webSocketServive: WebSocketService,
        private loginService: LoginService) { }

    // loadProducts$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(AppActions.loadSymbols),
    //         mergeMap(() => this.productService.getProducts().pipe(
    //             map(products => ProductActions.loadProductsSuccess({ products })),
    //             catchError(error => of(ProductActions.loadProductsFailure({ error })))
    //         ))
    //     )
    // });

    // updateProduct$ = createEffect(() => {
    //     return this.actions$
    //         .pipe(
    //             ofType(ProductActions.updateProduct),
    //             concatMap(action => this.productService.updateProduct(action.product)
    //                 .pipe(
    //                     map(product => ProductActions.updateProductSuccess({ product })),
    //                     catchError(error => of(ProductActions.updateProductFailure({ error })))
    //                 ))
    //         )
    // });

    // updateProduct$ = createEffect(() => {
    //     return this.actions$
    //         .pipe(
    //             ofType(ProductActions.updateProduct),
    //             concatMap(action => this.productService.updateProduct(action.product)
    //                 .pipe(
    //                     map(product => ProductActions.updateProductSuccess({ product })),
    //                     catchError(error => of(ProductActions.updateProductFailure({ error })))
    //                 ))
    //         )
    // });

    // createProduct$ = createEffect(() => {
    //     return this.actions$
    //         .pipe(
    //             ofType(ProductActions.createProduct),
    //             concatMap(action => this.productService.createProduct(action.product)
    //                 .pipe(
    //                     map(product => ProductActions.createProductSuccess({ product })),
    //                     catchError(error => of(ProductActions.createProductFailure({ error })))
    //                 ))
    //         )
    // });

    // deleteProduct$ = createEffect(() => {
    //     return this.actions$
    //         .pipe(
    //             ofType(ProductActions.deleteProduct),
    //             mergeMap(action => this.productService.deleteProduct(action.productId)
    //                 .pipe(
    //                     map(() => ProductActions.deleteProductSuccess({ productId: action.productId })),
    //                     catchError(error => of(ProductActions.deleteProductFailure({ error })))
    //                 ))
    //         )
    // });

    // loginUser$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(AppActions.loginAction),
    //         concatMap(action => this.loginService.validateLogin(action.login)
    //             .pipe(
    //                 map(() => AppActions.loginActionSuccess({ loggedIn: true })),
    //                 catchError(error => of(AppActions.loginActionFailure({ error })))
    //             ))
    //     )
    // });
}