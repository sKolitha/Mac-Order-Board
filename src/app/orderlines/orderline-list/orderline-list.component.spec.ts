import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlineListComponent } from './orderline-list.component';

describe('OrderlineListComponent', () => {
  let component: OrderlineListComponent;
  let fixture: ComponentFixture<OrderlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderlineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
