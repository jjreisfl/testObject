import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'object2array'
})
export class Object2arrayPipe implements PipeTransform {

  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    // console.dir(keys);
    return keys;
  }

}