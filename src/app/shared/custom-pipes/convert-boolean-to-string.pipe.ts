import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertBooleanToString'
})
export class ConvertBooleanToStringPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value===true){
      return "Yes";
    }
    else{
      return "No";
    }
    
  }

}
