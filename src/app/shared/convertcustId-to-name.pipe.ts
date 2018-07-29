import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { CustomerService } from "./customer.service";
import { RouteReuseStrategy } from "../../../node_modules/@angular/router";

@Pipe({
name:'ConvertCustomerIdToName'
})

export class ConvertCustomerIdToNamePipe implements PipeTransform{

    constructor(private customerService:CustomerService){}

    transform(value:string):string{
        return this.customerService.getCustomerName(value);
    }

}