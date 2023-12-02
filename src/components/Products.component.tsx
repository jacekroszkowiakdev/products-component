import React from "react";
import { useEffect, useState } from "react";
import { Product } from "../model/model";

export const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [sorted, setSorted] = useState<Product[]>([]);
    // const [filtered, setFiltered] = useState<Product[]>([]);

    // useEffect dependency array is empty so the effect runs only one to fetch the product data from the server
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((json) => {
                setProducts(json),
                    console.log(
                        "products data fetched:",
                        Array.isArray(products)
                    );
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSort = () => {
        const sortedProducts = products.sort((a, b) =>
            a.productName.localeCompare(b.productName)
        );
        setSorted(sortedProducts);
    };

    const handleFilter = () => {
        // const sortedProducts = products.sort((a, b) =>
        //     a.productName.localeCompare(b.productName)
        // );
        // setSorted(sortedProducts);
    };

    return (
        <>
            <h3>The Products:</h3>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <strong>{product.productName}</strong> - {product.model}{" "}
                        ({product.year})
                    </div>
                ))}
            </div>
            {/* Render the sorted or filtered conditonally isntead of the feched all */}
            <div>
                <button onClick={() => handleSort}>sort products</button>
            </div>
        </>
    );
};
