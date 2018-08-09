import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerCommentComponent } from '../../shared/customer-comment/customer-comment.component';
import { OrderlineDetailComponent } from './orderline-detail.component';
import { SharedModule } from '../../shared/shared.module';

describe('OrderlineDetailComponent', () => {
  let component: OrderlineDetailComponent;
  let fixture: ComponentFixture<OrderlineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule],
      declarations: [ OrderlineDetailComponent,CustomerCommentComponent ]
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
