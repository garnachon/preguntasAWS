export interface Pregunta {
    id: number;
    enunciado: string;
    opciones: Opcion[];
  }
  
  export interface Opcion {
    id: number;
    texto: string;
    seleccionada: boolean;
  }
  