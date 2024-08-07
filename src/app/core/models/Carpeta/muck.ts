import { Pericial } from '../Indicio/DTO.model';
import { Carpeta } from './DTO.model';
import { GetCarpetasResponse } from './Response.model';


const periciales: Pericial[] = [
  {
    id: 1,
    pericial: '🔎 Periciales',
    tipo_delito: 'Robo a mano armada',
    descripcion: 'Identificación de sangre',
  },
  {
    id: 2,
    pericial: '📦 Bodega de resguardo',
    tipo_delito: 'Robo a mano armada',
    descripcion: 'Identificación de sangre',
  },
  {
    id: 3,
    pericial: '🔎 Periciales',
    tipo_delito: 'Robo a mano armada',
    descripcion: 'Identificación de sangre',
  },
];

export const getCarpetasMuck: GetCarpetasResponse = {
  payload: [
    {
      n_u_a_t: '98765432',
      no_expediente: '00005683',
      c_i: '00005683',
      delitos: ['Robo a mano armada', 'Violencia'],
      victimas: ['JUAN ARMANDO GONZÁLEZ LOYDA'],
      probables_responsables: [
        'GERARDO MARTÍNEZ DÍAZ',
        'ULISES RÍOS HERNÁNDEZ',
      ],
      lugar_de_los_hechos:
        'Blvd. Adolfo López Mateos 2772, Jardines del Pedregal, Álvaro Obregón, 01900 Ciudad de México, CDMX',
      indicios: [
        {
          numero_indicio: '000456196',
          numero_bodega: '000456196',
          tipo_indicio: 'Robo a mano armada',
          descripcion: 'Revolver color negro',
          periciales_sugeridos: periciales,
        },
        {
          numero_indicio: '000456197',
          numero_bodega: '000456197',
          tipo_indicio: 'Robo a mano armada',
          descripcion: 'Cuchillo plateado',
          periciales_sugeridos: periciales,
        },
      ],
    },
    {
      n_u_a_t: '98765433',
      no_expediente: '00005684',
      c_i: '00005684',
      delitos: ['Fraude', 'Estafa'],
      victimas: ['MARÍA LÓPEZ HERNÁNDEZ'],
      probables_responsables: ['CARLOS PÉREZ GARCÍA'],
      lugar_de_los_hechos:
        'Av. Insurgentes Sur 1234, Colonia del Valle, Benito Juárez, 03100 Ciudad de México, CDMX',
      indicios: [
        {
          numero_indicio: '000456198',
          numero_bodega: '000456198',
          tipo_indicio: 'Fraude',
          descripcion: 'Documentos falsificados',
          periciales_sugeridos: periciales,
        },
        {
          numero_indicio: '000456199',
          numero_bodega: '000456199',
          tipo_indicio: 'Fraude',
          descripcion: 'Computadora portátil',
          periciales_sugeridos: periciales,
        },
      ],
    },
  ],
  message: ['success'],
  code: 200,
  error: false,
};


export const muckCarpetas2: Carpeta[] = [
  {
    n_u_a_t: '98765440',
    no_expediente: '00005691',
    c_i: '00005691',
    delitos: ['Violencia doméstica'],
    victimas: ['MARÍA JIMÉNEZ LÓPEZ'],
    probables_responsables: ['PEDRO GÓMEZ MARTÍNEZ'],
    lugar_de_los_hechos:
      'Calle Amsterdam 234, Condesa, Cuauhtémoc, 06100 Ciudad de México, CDMX',
    indicios: [
      {
        numero_indicio: '000456220',
        numero_bodega: '000456220',
        tipo_indicio: 'Violencia doméstica',
        descripcion: 'Botella rota',
        periciales_sugeridos: periciales,
      },
      {
        numero_indicio: '000456221',
        numero_bodega: '000456221',
        tipo_indicio: 'Violencia doméstica',
        descripcion: 'Ropa con manchas de sangre',
        periciales_sugeridos: periciales,
      },
    ],
  },
];

export const muckCarpetas3: Carpeta[] = [
  {
    n_u_a_t: '98765445',
    no_expediente: '00005696',
    c_i: '00005696',
    delitos: ['Acoso sexual'],
    victimas: ['VERÓNICA RUIZ GONZÁLEZ'],
    probables_responsables: ['DIEGO FERNÁNDEZ LÓPEZ'],
    lugar_de_los_hechos:
      'Calle Berlín 890, Del Carmen, Coyoacán, 04100 Ciudad de México, CDMX',
    indicios: [
      {
        numero_indicio: '000456230',
        numero_bodega: '000456230',
        tipo_indicio: 'Acoso sexual',
        descripcion: 'Mensajes de texto',
        periciales_sugeridos: periciales,
      },
      {
        numero_indicio: '000456231',
        numero_bodega: '000456231',
        tipo_indicio: 'Acoso sexual',
        descripcion: 'Fotografías inapropiadas',
        periciales_sugeridos: periciales,
      },
    ],
  },
  {
    n_u_a_t: '98765446',
    no_expediente: '00005697',
    c_i: '00005697',
    delitos: ['Fraude fiscal'],
    victimas: ['GOBIERNO FEDERAL'],
    probables_responsables: ['PABLO SÁNCHEZ MARTÍNEZ'],
    lugar_de_los_hechos:
      'Calle Reforma 1234, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX',
    indicios: [
      {
        numero_indicio: '000456232',
        numero_bodega: '000456232',
        tipo_indicio: 'Fraude fiscal',
        descripcion: 'Documentos contables',
        periciales_sugeridos: periciales,
      },
      {
        numero_indicio: '000456233',
        numero_bodega: '000456233',
        tipo_indicio: 'Fraude fiscal',
        descripcion: 'Computadora de la empresa',
        periciales_sugeridos: periciales,
      },
    ],
  },
  {
    n_u_a_t: '98765447',
    no_expediente: '00005698',
    c_i: '00005698',
    delitos: ['Lavado de dinero'],
    victimas: ['SISTEMA FINANCIERO'],
    probables_responsables: ['MARIO RUIZ HERNÁNDEZ'],
    lugar_de_los_hechos:
      'Calle Insurgentes 345, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX',
    indicios: [
      {
        numero_indicio: '000456234',
        numero_bodega: '000456234',
        tipo_indicio: 'Lavado de dinero',
        descripcion: 'Transacciones bancarias',
        periciales_sugeridos: periciales,
      },
      {
        numero_indicio: '000456235',
        numero_bodega: '000456235',
        tipo_indicio: 'Lavado de dinero',
        descripcion: 'Empresas fantasmas',
        periciales_sugeridos: periciales,
      },
    ],
  },
  {
    n_u_a_t: '98765448',
    no_expediente: '00005699',
    c_i: '00005699',
    delitos: ['Contrabando'],
    victimas: ['HACIENDA PÚBLICA'],
    probables_responsables: ['JUAN CARLOS LÓPEZ'],
    lugar_de_los_hechos:
      'Calle Palmas 678, Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad de México, CDMX',
    indicios: [
      {
        numero_indicio: '000456236',
        numero_bodega: '000456236',
        tipo_indicio: 'Contrabando',
        descripcion: 'Mercancía no declarada',
        periciales_sugeridos: periciales,
      },
      {
        numero_indicio: '000456237',
        numero_bodega: '000456237',
        tipo_indicio: 'Contrabando',
        descripcion: 'Documentos de aduana falsificados',
        periciales_sugeridos: periciales,
      },
    ],
  },
  {
    n_u_a_t: '98765449',
    no_expediente: '00005700',
    c_i: '00005700',
    delitos: ['Cibercrimen'],
    victimas: ['COMPAÑÍA XYZ'],
    probables_responsables: ['ANA MARÍA HERRERA'],
    lugar_de_los_hechos:
      'Calle Reforma 987, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX',
    indicios: [
      {
        numero_indicio: '000456238',
        numero_bodega: '000456238',
        tipo_indicio: 'Cibercrimen',
        descripcion: 'Logs de servidores',
        periciales_sugeridos: periciales,
      },
      {
        numero_indicio: '000456239',
        numero_bodega: '000456239',
        tipo_indicio: 'Cibercrimen',
        descripcion: 'Correo electrónico comprometido',
        periciales_sugeridos: periciales,
      },
    ],
  },
];

export const muckCarpetas4: Carpeta[] = [
  {
    n_u_a_t: '98765450',
    no_expediente: '00005701',
    c_i: '00005701',
    delitos: ['Abuso de autoridad'],
    victimas: ['JUAN PÉREZ GARCÍA'],
    probables_responsables: ['JOSÉ LÓPEZ MARTÍNEZ'],
    lugar_de_los_hechos:
      'Calle Chapultepec 123, Polanco, Miguel Hidalgo, 11560 Ciudad de México, CDMX',
    indicios: [
      {
        numero_indicio: '000456240',
        numero_bodega: '000456240',
        tipo_indicio: 'Abuso de autoridad',
        descripcion: 'Reporte de abuso',
        periciales_sugeridos: periciales,
      },
      {
        numero_indicio: '000456241',
        numero_bodega: '000456241',
        tipo_indicio: 'Abuso de autoridad',
        descripcion: 'Grabación de audio',
        periciales_sugeridos: periciales,
      },
    ],
  },
  {
    n_u_a_t: '98765451',
    no_expediente: '00005702',
    c_i: '00005702',
    delitos: ['Robo de identidad'],
    victimas: ['MARÍA MARTÍNEZ LÓPEZ'],
    probables_responsables: ['LUIS RAMÍREZ PÉREZ'],
    lugar_de_los_hechos:
      'Calle Morelos 456, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX',
    indicios: [
      {
        numero_indicio: '000456242',
        numero_bodega: '000456242',
        tipo_indicio: 'Robo de identidad',
        descripcion: 'Tarjetas de crédito falsas',
        periciales_sugeridos: periciales,
      },
      {
        numero_indicio: '000456243',
        numero_bodega: '000456243',
        tipo_indicio: 'Robo de identidad',
        descripcion: 'Documentos personales falsificados',
        periciales_sugeridos: periciales,
      },
    ],
  },
  {
    n_u_a_t: '98765452',
    no_expediente: '00005703',
    c_i: '00005703',
    delitos: ['Secuestro'],
    victimas: ['JORGE GONZÁLEZ HERRERA'],
    probables_responsables: ['PEDRO SÁNCHEZ MARTÍNEZ'],
    lugar_de_los_hechos:
      'Calle Insurgentes 789, Roma Norte, Cuauhtémoc, 06700 Ciudad de México, CDMX',
    indicios: [
      {
        numero_indicio: '000456244',
        numero_bodega: '000456244',
        tipo_indicio: 'Secuestro',
        descripcion: 'Cuerda',
        periciales_sugeridos: periciales,
      },
      {
        numero_indicio: '000456245',
        numero_bodega: '000456245',
        tipo_indicio: 'Secuestro',
        descripcion: 'Teléfono móvil del secuestrador',
        periciales_sugeridos: periciales,
      },
    ],
  },

];

