import { TestBed, inject } from '@angular/core/testing';

import { OrderLineService } from './orderline.service';
import { HttpClientModule } from '@angular/common/http';

describe('OrderLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [OrderLineService]
    });
  });

  it('should be created', inject([OrderLineService], (service: OrderLineService) => {
    expect(service).toBeTruthy();
  }));
});
