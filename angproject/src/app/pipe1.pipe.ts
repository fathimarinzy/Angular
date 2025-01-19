import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(value:any,display:any,view:any): any{
  //   return `${value}.${display},${view}`;
  // }

  transform(value:any,display:any,view:any): any{
    // return display+1000;
    // return value.split("");
    // return value.split("").reverse();
    // return value.split("").reverse().join("");
    // return value.toUpperCase();
    //  return value.toLowerCase();

  }

}
 