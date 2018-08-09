import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderlineDetailComponent } from './orderline-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

describe('OrderlineDetailComponent', () => {
  let component: OrderlineDetailComponent;
  let fixture: ComponentFixture<OrderlineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule,HttpClientModule,ActivatedRoute,Router],
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
