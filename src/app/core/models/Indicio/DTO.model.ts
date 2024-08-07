export interface Indicio {
  numero_indicio: string;
  numero_bodega: string;
  tipo_indicio: string;
  descripcion: string;
  periciales_sugeridos: Pericial[];
}

export interface Pericial {
  id: number,
  pericial: string,
  tipo_delito: string,
  descripcion: string
}
