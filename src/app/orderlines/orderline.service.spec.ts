import { TestBed, inject } from '@angular/core/testing';

import { OrderLineService } from './orderline.service';

describe('OrderLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderLineService]
    });
  });

  it('should be created', inject([OrderLineService], (service: OrderLineService) => {
    expect(service).toBeTruthy();
  }));
});
