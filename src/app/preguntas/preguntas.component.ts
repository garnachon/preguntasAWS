import { Component, OnInit } from '@angular/core';

interface Pregunta {
  pregunta: string;
  opciones: string[];
  respuesta: string[];
}

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  preguntas: Pregunta[] = [
    {
      pregunta: '¿Cuál es la capital de Francia?',
      opciones: ['Londres', 'París', 'Madrid', 'Roma'],
      respuesta: ['París']
    },
    {
      pregunta: '¿En qué continente se encuentra Australia?',
      opciones: ['Europa', 'Asia', 'África', 'Oceanía'],
      respuesta: ['Oceanía']
    },
    {
      pregunta: '¿Cuál es el río más largo del mundo?',
      opciones: ['Amazonas', 'Nilo', 'Mississippi', 'Yangtsé'],
      respuesta: ['Amazonas']
    },
    {
      pregunta: '¿Cuál es el pecho frio mas grande?',
      opciones: ['Belgrano', 'Instituto', 'Talleres', 'Racing'],
      respuesta: ['Talleres']
    }
  ];

  preguntasAleatorias: Pregunta[] = [];
  preguntasSeleccionadas: Pregunta[] = [];
  preguntaActual = 0;
  respuestasSeleccionadas: string[][] = [];
  mostrarRespuestaIncorrecta = false;
  mostrarSiguiente = false;
  mostrarPreguntas = true;
  preguntasCompletadas = false;
  mostrarGracias = false;
  mostrarPreguntaVolver = true;

  ngOnInit() {
    this.preguntasAleatorias = this.obtenerPreguntasAleatorias();
    this.preguntasSeleccionadas = this.preguntasAleatorias.slice(0, 3);
    this.respuestasSeleccionadas = new Array(this.preguntasSeleccionadas.length).fill([]);
  }

  obtenerPreguntasAleatorias(): Pregunta[] {
    const preguntas = [...this.preguntas];
    const preguntasAleatorias: Pregunta[] = [];

    while (preguntasAleatorias.length < 3) {
      const index = Math.floor(Math.random() * preguntas.length);
      const pregunta = preguntas.splice(index, 1)[0];
      pregunta.opciones = this.obtenerOpcionesAleatorias(pregunta.opciones);
      preguntasAleatorias.push(pregunta);
    }

    return preguntasAleatorias;
  }

  obtenerOpcionesAleatorias(opciones: string[]): string[] {
    const opcionesAleatorias = [...opciones];

    for (let i = opcionesAleatorias.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opcionesAleatorias[i], opcionesAleatorias[j]] = [opcionesAleatorias[j], opcionesAleatorias[i]];
    }

    return opcionesAleatorias;
  }

  verificarRespuestas(pregunta: Pregunta): boolean {
    const respuestasSeleccionadas = this.respuestasSeleccionadas[this.preguntaActual];
    return pregunta.respuesta.every(respuesta => respuestasSeleccionadas.includes(respuesta));
  }

  siguientePregunta() {
    this.mostrarRespuestaIncorrecta = false;
    this.preguntaActual++;

    if (this.preguntaActual >= this.preguntasSeleccionadas.length) {
      this.mostrarPreguntas = false;
      this.preguntasCompletadas = true;
    }
  }

  seleccionarRespuesta(opcion: string) {
    const respuestasSeleccionadas = [...this.respuestasSeleccionadas[this.preguntaActual]];

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
    this.preguntaActual = 0;
    this.respuestasSeleccionadas = new Array(this.preguntasSeleccionadas.length).fill([]);
    this.mostrarRespuestaIncorrecta = false;
    this.mostrarSiguiente = false;
    this.mostrarPreguntas = true;
    this.preguntasCompletadas = false;
    this.mostrarGracias = false;
    this.mostrarPreguntaVolver = true;
  }

  volver() {
    this.preguntaActual--;
    this.mostrarSiguiente = true;
    this.mostrarRespuestaIncorrecta = false;

    if (this.preguntaActual === 0) {
      this.mostrarPreguntaVolver = true;
    }
  }
}
