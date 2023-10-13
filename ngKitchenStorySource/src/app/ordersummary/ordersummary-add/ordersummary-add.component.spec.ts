import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaryAddComponent } from './ordersummary-add.component';

describe('OrdersummaryAddComponent', () => {
  let component: OrdersummaryAddComponent;
  let fixture: ComponentFixture<OrdersummaryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersummaryAddComponent]
    });
    fixture = TestBed.createComponent(OrdersummaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
