import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-dinamicos',
  templateUrl: './formularios-dinamicos.component.html',
  styleUrls: ['./formularios-dinamicos.component.css']
})
export class FormulariosDinamicosComponent implements OnInit {

  @ViewChild('divTest') div!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  public formTest: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private render: Renderer2,
    private el: ElementRef,
  ) {
    this.formTest = this.formBuilder.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  // private crearFormulario(): void {

  // }

  public validarFormulario(): boolean {
    return this.formTest.invalid;
  }

  public agregarCampo(): void {
    const divHtml = this.div.nativeElement;

    let text = this.render.createElement('input');

    this.render.appendChild(divHtml, text);
    this.render.setAttribute(text, 'type', 'text');
    this.render.setAttribute(text, 'formControlName', 'campo');

    this.formTest.addControl('campo', new FormControl(''));



    // this.formTest.addControl('campo', new FormGroup({}));

    // let formPregunta: FormGroup = this.formTest.get('campo') as FormGroup;
    // formPregunta.addControl('telefono', new FormControl(""));
    // let telefono: any = this.formTest.get('campo')?.get('telefono');
    // telefono.addValidators([Validators.required]);

    // console.log(formPregunta);

  }

  public enviar() {
    console.log(this.formTest.valid);
  }

}
