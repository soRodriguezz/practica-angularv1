import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivePersonalizada]'
})
export class DirectivePersonalizadaDirective implements OnInit {

  @Input('path') pathVariable!: string;

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit() {
    const parrafo = this.elementRef.nativeElement;
    this.render.setAttribute(parrafo, 'src', this.pathVariable);
  }

}
