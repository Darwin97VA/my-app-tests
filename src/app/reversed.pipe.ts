import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversed'
})
export class ReversedPipe implements PipeTransform {

  transform(str: string): string {
    var len = str.length;
    var newString = [];

    while (len--) {
        newString.push(str[len]);
    }

    return newString.join('').toUpperCase();
  }

}
