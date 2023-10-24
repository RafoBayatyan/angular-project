import { Pipe,PipeTransform } from "@angular/core";
import { A } from './select-items.model';


@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipie implements PipeTransform {
  transform(items: A<any>[], serach: string, nameForKey: string): A<any>[]{
    if(serach.length === 0){
      return items;
    }
    return items.filter(item => item[nameForKey].toLowerCase().includes(serach.toLowerCase()))

  }
}
