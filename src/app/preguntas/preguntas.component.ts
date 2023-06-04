import { Component, OnInit } from '@angular/core';

interface Pregunta {
  pregunta: string;
  opciones: string[];
  respuesta: string;
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
      respuesta: 'París'
    },
    {
      pregunta: '¿En qué continente se encuentra Australia?',
      opciones: ['Europa', 'Asia', 'África', 'Oceanía'],
      respuesta: 'Oceanía'
    },
    {
      pregunta: '¿Cuál es el río más largo del mundo?',
      opciones: ['Amazonas', 'Nilo', 'Mississippi', 'Yangtsé'],
      respuesta: 'Amazonas'
    }
  ];

  preguntasAleatorias: Pregunta[] = [];
  preguntaActual = 0;
  respuestaSeleccionada: string | null = null;
  mostrarRespuestaIncorrecta = false;
  mostrarSiguiente = false;
  mostrarPreguntas = true;

  ngOnInit() {
    this.preguntasAleatorias = this.obtenerPreguntasAleatorias();
  }

  obtenerPreguntasAleatorias(): Pregunta[] {
    const preguntas = [...this.preguntas];
    const preguntasAleatorias: Pregunta[] = [];

    while (preguntas.length > 0) {
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

  verificarRespuesta(pregunta: Pregunta): boolean {
    return this.respuestaSeleccionada === pregunta.respuesta;
  }

  siguientePregunta() {
    this.mostrarRespuestaIncorrecta = false;
    this.respuestaSeleccionada = null;
    this.preguntaActual++;

    if (this.preguntaActual < this.preguntasAleatorias.length) {
      this.mostrarSiguiente = false;
    } else {
      this.mostrarPreguntas = false;
    }
  }
}
