import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderlineListComponent } from './orderline-list.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


describe('OrderlineListComponent', () => {
  let component: OrderlineListComponent;
  let fixture: ComponentFixture<OrderlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,SharedModule,HttpClientModule],
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
