import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    if(value.length === 0){
      console.log("errr");
      return value;
    }

    value.sort((a,b) => {return a.name.localeCompare(b.name)});
    return value;
      
    
  }
}

