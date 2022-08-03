import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-list-item',
  templateUrl: './crypto-list-item.component.html',
  styleUrls: ['./crypto-list-item.component.css']
})
export class CryptoListItemComponent implements OnInit {
  @Input() symbol: string = '';
  @Input() closePrice: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
