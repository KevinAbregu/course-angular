import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    if(value.length === 0 ){
      return value;
    }
    let valueReversed = ""
    for(let i = value.length - 1; i >= 0; i--){
      valueReversed+= value.charAt(i);
    }
    return valueReversed;
  }

}
