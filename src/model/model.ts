export interface ProductsData {
    products: Product[];
}

export interface Product {
    id: number;
    productName: string;
    year: number;
    model: string;
}
