import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { PipeArgsPipe } from './pipes/pipe-args.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HostListenerComponent,
    PipeArgsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
