import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmenuListComponent } from './shopmenu-list.component';

describe('ShopmenuListComponent', () => {
  let component: ShopmenuListComponent;
  let fixture: ComponentFixture<ShopmenuListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopmenuListComponent]
    });
    fixture = TestBed.createComponent(ShopmenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
