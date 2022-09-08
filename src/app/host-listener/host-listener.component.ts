import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent  {
  @ViewChild('player') player!: ElementRef;
  counter = 0;
  counter2 = 0;
  text = 'Hola mundo';

  constructor(
    private render2: Renderer2
  ){}

  @HostListener('window:keydown.space', ['$event']) // toma las presiones del espacio
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }
  resetCounter() {
    this.counter = 0;
  }

  @HostListener('window:keydown', ['$event']) // toma las presiones del teclado
  handleKeyDown2(event: KeyboardEvent) {
    // console.log(event);
    this.counter2++;
  }
  resetCounter2() {
    this.counter2 = 0;
  }


  @HostListener('document:keydown', ['$event.key']) // toma las presiones del teclado
  handleKeyDown3($event: string): void {
    // console.log($event);
    this.move($event);
  }

  move(nameEvent: string): void {
    const playerEl = this.player.nativeElement as HTMLElement;
    console.log(playerEl);

    console.log(playerEl.getAttribute('style'));

    if(nameEvent === 'ArrowRight') {
      const { left = '0px' } = playerEl.style;
      const parseValue = Number(left.replace('px', ''));
      this.render2.setStyle(playerEl, 'left', `${ parseValue + 50 }px`);
    }

    if(nameEvent === 'ArrowLeft') {
      const { left = '0px' } = playerEl.style;
      const parseValue = Number(left.replace('px', ''));
      this.render2.setStyle(playerEl, 'left', `${ parseValue - 50 }px`);
    }
  }

  @HostListener('document:click', ['$event.target'])
  handleClick($event: HTMLElement): void {
    console.log('Click', $event.classList.toString()); // pasa a cadena todas las clases que contenga el elemento en el que se hace click
  }

}
