import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterData: string): any[] {
    const arr = []
    if (filterData !== null) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].accountNo.substr(0, filterData.length) === filterData) {
          arr.push(items[i])
        };
      }
      return arr
    }
    return items
  }

}
