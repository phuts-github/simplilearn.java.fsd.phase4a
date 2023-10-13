import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaryUpdateComponent } from './ordersummary-update.component';

describe('OrdersummaryUpdateComponent', () => {
  let component: OrdersummaryUpdateComponent;
  let fixture: ComponentFixture<OrdersummaryUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersummaryUpdateComponent]
    });
    fixture = TestBed.createComponent(OrdersummaryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
