export interface ProductsData {
    products: Product[];
}

export interface Product {
    id: number;
    productName: string;
    year: number;
    model: string;
}

export type valueof<T> = T[keyof T];
