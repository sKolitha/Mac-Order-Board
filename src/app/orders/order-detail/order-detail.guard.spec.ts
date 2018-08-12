import { TestBed, inject } from '@angular/core/testing';

import { OrderDetailGuard } from './order-detail.guard';
import { Router, ActivatedRoute } from '@angular/router';

describe('OrderDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[Router,ActivatedRoute],
      providers: [OrderDetailGuard]
    });
  });

  it('should ...', inject([OrderDetailGuard], (guard: OrderDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
