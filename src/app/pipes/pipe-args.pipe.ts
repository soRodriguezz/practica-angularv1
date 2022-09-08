import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeArgs'
})
export class PipeArgsPipe implements PipeTransform {

  transform(value: string, saludo: string, hola: string): unknown {

    console.log(value);
    console.log(saludo);
    console.log(hola);
    return value.toUpperCase();;
  }

}
