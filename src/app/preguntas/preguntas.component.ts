import { Component } from '@angular/core';

interface Pregunta {
  pregunta: string;
  opciones: string[];
}

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  preguntasSeleccionadas: Pregunta[] = [];
  preguntasAleatorias: Pregunta[] = [];
  preguntaActual: number = 0;
  respuestasSeleccionadas: string[][] = [];
  mostrarRespuestaIncorrecta: boolean = false;
  mostrarSiguiente: boolean = false;
  mostrarPreguntas: boolean = true;
  preguntasCompletadas: boolean = false;
  mostrarGracias: boolean = false;
  mostrarPreguntaVolver: boolean = true;

  preguntas: Pregunta[] = [
    {
      pregunta: '¿Cuál es la capital de Francia?',
      opciones: ['*París', ' Madrid', ' Londres', ' Roma']
    },
    {
      pregunta: '¿Cuál es el río más largo del mundo?',
      opciones: ['*Amazonas', ' Nilo', ' Yangtsé', ' Mississippi']
    },
    {
      pregunta: '¿Cuál es el pecho frio mas grande del futbol?',
      opciones: ['*Talleres', ' Belgrano', ' Racing', ' Instituto']
    },
    {
      pregunta: '¿Cuales son numeros pares?',
      opciones: ['*2', ' 5', ' 7', '*8']
    },
    {
      pregunta: '¿Cuál es el océano más grande?',
      opciones: ['*Pacífico', ' Atlántico', ' Indico', ' Antártico']
    }
  ];

  constructor() {
    this.preguntasAleatorias = this.obtenerPreguntasAleatorias();
    this.preguntasSeleccionadas = this.preguntasAleatorias.slice(0, 3);
    this.respuestasSeleccionadas = new Array(this.preguntasSeleccionadas.length).fill([]);
  }

  obtenerPreguntasAleatorias(): Pregunta[] {
    return this.preguntas.sort(() => Math.random() - 0.5);
  }

  verificarRespuestas(pregunta: Pregunta): boolean {
    const respuestasObligatorias = pregunta.opciones.filter(opcion => opcion.startsWith('*'));
    const respuestasSeleccionadas = this.respuestasSeleccionadas[this.preguntaActual] || [];
    return (
      respuestasObligatorias.length === respuestasSeleccionadas.length &&
      respuestasObligatorias.every(opcion => respuestasSeleccionadas.includes(opcion))
    );
  }

  siguientePregunta() {
    this.preguntaActual++;
    this.mostrarSiguiente = false;
    this.mostrarRespuestaIncorrecta = false;

    if (this.preguntaActual === this.preguntasSeleccionadas.length) {
      this.mostrarPreguntas = false;
      this.preguntasCompletadas = true;
    }
  }

  seleccionarRespuesta(opcion: string) {
    const respuestasSeleccionadas = [...(this.respuestasSeleccionadas[this.preguntaActual] || [])];

    if (respuestasSeleccionadas.includes(opcion)) {
      const index = respuestasSeleccionadas.indexOf(opcion);
      respuestasSeleccionadas.splice(index, 1);
    } else {
      respuestasSeleccionadas.push(opcion);
    }

    this.respuestasSeleccionadas[this.preguntaActual] = respuestasSeleccionadas;
    this.mostrarRespuestaIncorrecta = !this.verificarRespuestas(this.preguntasSeleccionadas[this.preguntaActual]);
    this.mostrarSiguiente = !this.mostrarRespuestaIncorrecta;
  }

  reiniciarPrueba() {
    this.preguntasAleatorias = this.obtenerPreguntasAleatorias();
    this.preguntasSeleccionadas = this.preguntasAleatorias.slice(0, 3);
    this.respuestasSeleccionadas = new Array(this.preguntasSeleccionadas.length).fill([]);
    this.preguntaActual = 0;
    this.mostrarRespuestaIncorrecta = false;
    this.mostrarSiguiente = false;
    this.mostrarPreguntas = true;
    this.preguntasCompletadas = false;
    this.mostrarGracias = false;
    this.mostrarPreguntaVolver = true;
  }

  despedirse() {
    this.mostrarGracias = true;
    this.mostrarPreguntaVolver = false;
    this.mostrarPreguntas = false;
    this.preguntasCompletadas = false;
  }
}
