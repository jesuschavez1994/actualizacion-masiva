export interface PaginatedResponse<T> {
    items: T[];
    totalItems: number;
    pageSize: number;
    currentPage: number;
}

export interface Card {
    id: number;
    dato: string;
    porcentaje: number;
    color: string;
    title: string;
    number: number;
    description: string;
    items: Item[];
   
}

export interface Item {
    id: number;
    date: string;
    statusColor: string;
    tags: Tag[];
    type: string;
    typeColor: string;
    showIcons: boolean;
    menuOptions: MenuOption[];
}

export interface Tag {
    label: string;
    color: string;
}

export interface MenuOption {
    label: string;
    redirectUrl: string;
}
