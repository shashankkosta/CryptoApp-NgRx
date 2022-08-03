import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoOhlcComponent } from './crypto-ohlc.component';

describe('CryptoOhlcComponent', () => {
  let component: CryptoOhlcComponent;
  let fixture: ComponentFixture<CryptoOhlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoOhlcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoOhlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
