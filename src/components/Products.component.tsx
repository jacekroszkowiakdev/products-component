import React from "react";
import { useEffect, useState } from "react";
import { Product } from "../model/model";

export const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [sorted, setSorted] = useState<Product[]>([]);
    const [filtered, setFiltered] = useState<Product[]>([]);

    // useEffect dependency array is empty so the effect runs only one to fetch the product data from the server
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                console.log("response.status =", response.status);
                return response.json();
            })
            .then((json) => {
                setProducts(json),
                    console.log(
                        "products data fetched:",
                        Array.isArray(products)
                        // response.status
                    );
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // add dynamic sort values (sort by alpabetically by name, date, sort alphabetically by model)
    const handleSort = () => {
        const sortedProducts = products.toSorted((a, b) =>
            a.productName.localeCompare(b.productName)
        );
        console.log(sortedProducts);
        setSorted(sortedProducts);
    };

    const handleFilter = (property: keyof Product) => {
        const filteredProducts = [...products].filter((product) =>
            product[property].toString().toLowerCase().includes("cannondale")
        );
        console.log("filtered products: ", filteredProducts);
        setFiltered(filteredProducts);
    };

    return (
        <>
            <h3>The Products:</h3>
            <div className="products-container">
                {filtered.length === 0 && sorted.length === 0 && (
                    <div>
                        {products.map((product) => (
                            <div key={product.id}>
                                <strong>{product.productName}</strong> -{" "}
                                {product.model} ({product.year})
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <button onClick={handleSort}>sort products</button>
            <button onClick={() => handleFilter("model")}>
                filter products by Model
            </button>
            <button onClick={() => handleFilter("productName")}>
                filter products by Make
            </button>
            <button onClick={() => handleFilter("year")}>
                filter products by year of production
            </button>
            <div>
                {(sorted || filtered).map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image-container">
                            <img
                                className="product-image"
                                // src={require(`../images/${product.model}.jpg`)}
                                alt={`image of ${product.productName} ${product.model}`}
                            />
                        </div>
                        <strong>{product.productName}</strong>
                        <p>
                            {product.model} {product.year}
                        </p>
                    </div>
                ))}
            </div>

            {/* <div>
                {filtered.map((product) => (
                    <div key={product.id}>
                        <strong>{product.productName}</strong> - {product.model}{" "}
                        ({product.year})
                    </div>
                ))}
            </div> */}
        </>
    );
};
