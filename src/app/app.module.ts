import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { FormsModule } from '@angular/forms'; // Agrega esta importación

@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Agrega esta línea para importar FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }