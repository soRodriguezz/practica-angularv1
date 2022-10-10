import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { PipeArgsPipe } from './pipes/pipe-args.pipe';
import { DirectivePersonalizadaDirective } from './directives/directive-personalizada.directive';
import { FormulariosDinamicosComponent } from './formularios-dinamicos/formularios-dinamicos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsoDirectivasComponent } from './uso-directivas/uso-directivas.component';
import { PersonalizacionDirective } from './uso-directivas/directives/personalizacion.directive';

@NgModule({
  declarations: [
    AppComponent,
    HostListenerComponent,
    PipeArgsPipe,
    DirectivePersonalizadaDirective,
    FormulariosDinamicosComponent,
    UsoDirectivasComponent,
    PersonalizacionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
