import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaryViewComponent } from './ordersummary-view.component';

describe('OrdersummaryViewComponent', () => {
  let component: OrdersummaryViewComponent;
  let fixture: ComponentFixture<OrdersummaryViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersummaryViewComponent]
    });
    fixture = TestBed.createComponent(OrdersummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
