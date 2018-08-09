import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemMasterComponent } from './item-master.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { CommonModule } from '../../../node_modules/@angular/common';

describe('ItemMasterComponent', () => {
  let component: ItemMasterComponent;
  let fixture: ComponentFixture<ItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule, CommonModule,     
        ReactiveFormsModule],
      declarations: [ ItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
