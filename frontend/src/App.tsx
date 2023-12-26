import "./App.css";
import React, { useEffect, useState } from "react";
import { ProductList } from "./components/ProductsList.component";
import { Product } from "./model/model";

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3000/api/products");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data.products);
        }
        fetchData();
    }, []);

    return (
        <>
            <h2>Click the button to see the products</h2>
            <ProductList products={products} />
        </>
    );
};

export default App;
