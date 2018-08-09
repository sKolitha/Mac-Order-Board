import { TestBed, inject } from '@angular/core/testing';
import { ItemMasterGuard } from './item-master.guard';
import { Router } from '../../../node_modules/@angular/router';

describe('ItemMasterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[Router],
      providers: [ItemMasterGuard]
    });
  });

  it('should ...', inject([ItemMasterGuard], (guard: ItemMasterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
