import React from "react";
import { useEffect, useState } from "react";
import { Product } from "../model/model";

export const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [sorted, setSorted] = useState<Product[]>([]);
    const [filterProperty, setFilterProperty] = useState<"" | keyof Product>(
        ""
    );
    const [filtered, setFiltered] = useState<Product[]>([]);

    // useEffect dependency array is empty so the effect runs only one to fetch the product data from the server
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                console.log("response.status =", response.status);
                console.log("products: ", products);
                return response.json();
            })
            .then((json) => {
                setProducts(json),
                    console.log(
                        "products data fetched:",
                        products,
                        Array.isArray(products)
                    );
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSort = () => {
        const sortedProducts = products.toSorted((a: Product, b: Product) =>
            a.productName.localeCompare(b.productName)
        );
        console.log(sortedProducts);
        setSorted(sortedProducts);
    };

    // FIXME: const handleFilter = (productValues: "" | keyof Product) => {
    //     const filterCategory = productValues;
    //     console.log("cat:", filterCategory);
    //     const filteredProducts = [...products].filter((product) =>
    //         product[productValues].toString().toLowerCase().includes("caad13")
    //     );
    //     console.log("filtered products: ", filteredProducts);
    //     setFiltered(filteredProducts);
    // };

    const handleFilter = (filterProperty: keyof Product | "") => {
        if (filterProperty === "") {
            return;
        }
        const filteredProducts = [...products].filter(
            (product) =>
                product[filterProperty]
                    .toString()
                    .toLowerCase()
                    .includes(filterProperty) // Example filter condition
        );
        setFiltered(filteredProducts);
    };

    TODO: const handleFilterPropertyChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        console.log(event.target.value);
        setFilterProperty(event.target.value as keyof Product);
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

            <button onClick={handleSort}>sort products a - z</button>

            {/* <button onClick={() => handleFilter("caad13")}>
                filter products by Model
            </button>
            <button onClick={() => handleFilter("cannondale")}>
                filter products by Make
            </button>
            <button onClick={() => handleFilter("year")}>
                filter products by year of production
            </button> */}

            <label>
                Filter by Property:
                <select
                    value={filterProperty}
                    onChange={handleFilterPropertyChange}
                >
                    <option value="">-- Select Property --</option>
                    <option value="Cannondale">-- Cannondale --</option>
                    <option value="Marin">-- Marin --</option>
                    <option value="Felt">-- Felt --</option>
                    <option value="Rondo">-- Rondo --</option>
                    {/* {filtered.map((option) => {
                        <option key={option.id} value={option.productName}>
                            {option.productName}
                        </option>;
                    })} */}
                </select>
            </label>
            <button onClick={() => handleFilter(filterProperty)}>
                Apply Filter
            </button>

            <div className="products-container">
                {(sorted || filtered).map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image-container">
                            <img
                                className="product-image"
                                src={`../../public/images/${product.model}.jpg`}
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
