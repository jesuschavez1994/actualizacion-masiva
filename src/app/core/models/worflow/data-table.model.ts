export interface Accion {
    icon: string;
    title: string;
    href: string;
  }
  
export interface ElementsWithTable {
    datoFijo: string;
    pill: string;
    responsable: string;
    radioSelected: boolean;
    checkboxSelected: boolean;
    captura: string;
    dropdown: string;
    acciones: Accion[];
}
  