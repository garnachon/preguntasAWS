import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasComponent } from './preguntas/preguntas.component';

const routes: Routes = [
  { path: '', component: PreguntasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
