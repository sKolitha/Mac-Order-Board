import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlineDetailComponent } from './orderline-detail.component';

describe('OrderlineDetailComponent', () => {
  let component: OrderlineDetailComponent;
  let fixture: ComponentFixture<OrderlineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderlineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
