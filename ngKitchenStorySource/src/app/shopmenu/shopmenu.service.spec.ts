import { TestBed } from '@angular/core/testing';

import { ShopmenuService } from './shopmenu.service';

describe('ShopmenuService', () => {
  let service: ShopmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
