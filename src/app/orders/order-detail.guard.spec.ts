import { TestBed, async, inject } from '@angular/core/testing';

import { OrderDetailGuard } from './order-detail.guard';

describe('OrderDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderDetailGuard]
    });
  });

  it('should ...', inject([OrderDetailGuard], (guard: OrderDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
