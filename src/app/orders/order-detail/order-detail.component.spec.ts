import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailComponent } from './order-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ OrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
