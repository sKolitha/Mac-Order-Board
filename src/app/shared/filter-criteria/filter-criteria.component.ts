import { Component,  ViewChild,  AfterViewInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { OrderParameterService } from '../../shared/order-parameter/order-parameter.service';


@Component({
  selector: 'app-filter-criteria',
  templateUrl: './filter-criteria.component.html',
  styleUrls: ['./filter-criteria.component.css']
})

export class FilterCriteriaComponent implements AfterViewInit { 

  get filterByOrder() : string {
    if (this.callingComponetName==='orderComponent'){
      return this.parameterService.Order_filterByOrder;
    }
    else if (this.callingComponetName==='orderLineComponent'){
      return this.parameterService.Orderline_filterByOrder;
    }
  }
  set filterByOrder(value:string){
    if (this.callingComponetName==='orderComponent'){
      this.parameterService.Order_filterByOrder=value;
    }
    else if (this.callingComponetName==='orderLineComponent'){
      this.parameterService.Orderline_filterByOrder=value;
    }
    this.filterOrderbyValueChange.emit(value);      
  }

  get filterByCustomer() : string {    
    if (this.callingComponetName==='orderComponent'){
      return this.parameterService.Order_filterByCustomer;
    }
    else if (this.callingComponetName==='orderLineComponent'){
      return this.parameterService.Orderline_filterByCustomer;
    }
    
  }
  set filterByCustomer(value:string){
    if (this.callingComponetName==='orderComponent'){
      this.parameterService.Order_filterByCustomer=value;
    }
    else if (this.callingComponetName==='orderLineComponent'){
      this.parameterService.Orderline_filterByCustomer=value;
    }
    this.filterCustomerbyValueChange.emit(value);    
  }

  @ViewChild('focusElement') focusElementRef:ElementRef;
  @Output() filterOrderbyValueChange:EventEmitter<string>=new EventEmitter<string>();
  @Output() filterCustomerbyValueChange:EventEmitter<string>=new EventEmitter<string>();
  @Input() callingComponetName:string="";

  constructor(private parameterService :OrderParameterService) { }

  ngAfterViewInit() :void{
    if (this.focusElementRef){   
      this.focusElementRef.nativeElement.focus();
    }
  }
}

