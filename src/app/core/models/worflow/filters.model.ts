export interface Value {
    id: string;
    value?: string;
    label: string;
    icon?: string;
    selected: boolean;
    disabled?: boolean;
  }
  
  export interface Item {
    id: string | null;
    label: string | null;
    componente: string;
    divHeight: number;
    divWidth: number;
    width: number;
    values: Value[];
    defaultValue: string | null;
    value: string | null;
    sp: string | null;
  }
  
  export interface Seccion {
    id: number;
    tipo: string;
    label: string;
    items: Item[];
  }
  
  export interface SectionWrapper {
    seccion: Seccion;
  }
  
  export interface InformationTable {
    addButtonLabel: string;
    hasAddPermission: boolean;
    titleDashboard: string;
    hasTableIndicator: boolean;
  }
  
  export interface ResultWebApi1 {
    id: number;
    informationTable: InformationTable;
    secciones: SectionWrapper[];
  }
  