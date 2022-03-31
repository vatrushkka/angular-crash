import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondUp'
})
export class SecondUpPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('')
      .map((symbol: string, index: number) => {
        return index % 2 === 0 ? symbol.toLowerCase() : symbol.toUpperCase();
      })
      .join('');
  }
}
