import { TestBed, async, inject } from '@angular/core/testing';

import { ItemMasterGuard } from './item-master.guard';

describe('ItemMasterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemMasterGuard]
    });
  });

  it('should ...', inject([ItemMasterGuard], (guard: ItemMasterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
