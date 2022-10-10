import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPersonalizacion]'
})
export class PersonalizacionDirective {

  @Input('path') pathVariableImg!: string;

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit() {
    const img = this.elementRef.nativeElement;

    if(this.pathVariableImg === ''){
      this.render.setAttribute(img, 'src', 'https://cdn-icons-png.flaticon.com/512/620/620851.png');
      return;
    }

    this.render.setAttribute(img, 'src', this.pathVariableImg)

    this.render.setAttribute(img, 'width', '500px');

  }

  @HostListener('click', ['$event.target'])
  handleClick($event: HTMLElement): void {
    console.log('Click', $event.classList.toString()); // pasa a cadena todas las clases que contenga el elemento en el que se hace click
    const nameNode = $event.attributes.getNamedItem('src');
    console.log(nameNode!.value);
  }

}
