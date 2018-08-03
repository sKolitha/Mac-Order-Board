
import { CustomerService } from "./customer.service";
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
name:'ConvertCustomerIdToName'
})

export class ConvertCustomerIdToNamePipe implements PipeTransform{

    constructor(private customerService:CustomerService){}

    transform(value:string):string{
        return this.customerService.getCustomerName(value);
    }

}