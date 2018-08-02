import { TestBed, inject } from '@angular/core/testing';

import { OrderParameterService } from './order-parameter.service';

describe('OrderParameterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderParameterService]
    });
  });

  it('should be created', inject([OrderParameterService], (service: OrderParameterService) => {
    expect(service).toBeTruthy();
  }));
});
