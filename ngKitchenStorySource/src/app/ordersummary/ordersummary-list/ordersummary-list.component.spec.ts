import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaryListComponent } from './ordersummary-list.component';

describe('OrdersummaryListComponent', () => {
  let component: OrdersummaryListComponent;
  let fixture: ComponentFixture<OrdersummaryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersummaryListComponent]
    });
    fixture = TestBed.createComponent(OrdersummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
