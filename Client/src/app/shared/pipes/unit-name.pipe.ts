import { UnitDic } from './../util/dictionary';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitName'
})
export class UnitNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return UnitDic[value];
  }

}
