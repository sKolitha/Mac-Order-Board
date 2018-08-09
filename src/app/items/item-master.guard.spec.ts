import { TestBed, async, inject } from '@angular/core/testing';

import { ItemMasterGuard } from './item-master.guard';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';

describe('ItemMasterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ActivatedRouteSnapshot, RouterStateSnapshot,Router],
      providers: [ItemMasterGuard]
    });
  });

  it('should ...', inject([ItemMasterGuard], (guard: ItemMasterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
