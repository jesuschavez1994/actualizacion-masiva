import { Indicio } from "../Indicio/DTO.model";

export interface Carpeta {
  n_u_a_t: string;
  no_expediente: string;
  c_i: string;
  delitos: string[];
  victimas: string[];
  probables_responsables: string[];
  lugar_de_los_hechos: string;
  indicios: Indicio[];
}

export interface CarpetasRepositorio {
  dictamenesProceso: Carpeta[],
  dictamenesTerminados: Carpeta[],
  indiciosProcesar: Carpeta[],
  indiciosTransito: Carpeta[],
}