import { Component, OnInit, ViewChild,  AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { OrderParameterService } from '../../orders/order-parameter/order-parameter.service';


@Component({
  selector: 'app-filter-criteria',
  templateUrl: './filter-criteria.component.html',
  styleUrls: ['./filter-criteria.component.css']
})

export class FilterCriteriaComponent implements OnInit, AfterViewInit { 
 
  get filterByOrder() : string {
    return this.parameterService.filterByOrder;
  }
  set filterByOrder(value:string){
    this.parameterService.filterByOrder=value;
    this.filterOrderbyValueChange.emit(value);    
  }

  get filterByCustomer() : string {    
    return this.parameterService.filterByCustomer;
  }
  set filterByCustomer(value:string){
    this.parameterService.filterByCustomer=value;
    this.filterCustomerbyValueChange.emit(value);    
  }

  @ViewChild('focusElement') focusElementRef:ElementRef;
  @Output() filterOrderbyValueChange:EventEmitter<string>=new EventEmitter<string>();
  @Output() filterCustomerbyValueChange:EventEmitter<string>=new EventEmitter<string>();

  constructor(private parameterService :OrderParameterService) { }

  ngOnInit() {    
  }

  ngAfterViewInit() :void{
    if (this.focusElementRef){   
      this.focusElementRef.nativeElement.focus();
    }
  }
}

