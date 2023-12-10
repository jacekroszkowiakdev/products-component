import React from "react";
import { useEffect, useState } from "react";
import { Product } from "../model/model";

export const ProductList: React.FC<{ products: Product[] }> = ({
    products,
}) => {
    const [uniqueManufacturers, setUniqueManufacturers] = useState<Product[]>(
        []
    );
    const [uniqueModels, setUniqueModels] = useState<Product[]>([]);
    const [uniqueProductionYears, setuniqueProductionYears] = useState<
        Product[]
    >([]);
    const [sorted, setSorted] = useState<Product[]>([]);
    const [filterProperty, setFilterProperty] = useState<"" | keyof Product>(
        ""
    );
    const [filtered, setFiltered] = useState<Product[]>([]);

    useEffect(() => {
        if (products) {
            const uniqueManufacturers = getFilteredAndSortedProducts(
                products,
                (product) => product.manufacturer,
                "manufacturer"
            );

            setUniqueManufacturers(uniqueManufacturers);

            const uniqueModels = getFilteredAndSortedProducts(
                products,
                (product) => product.model,
                "model"
            );

            setUniqueModels(uniqueModels);

            const uniqueProductionYears = getFilteredAndSortedProducts(
                products,
                (product) => product.year,
                "year"
            );

            setuniqueProductionYears(uniqueProductionYears);
        }
    }, [products]);

    const getFilteredAndSortedProducts = (
        products: Product[],
        key: (product: Product) => string | number,
        productKey: "manufacturer" | "model" | "year"
    ): Product[] => {
        const uniqueProducts = Array.from(
            new Map(products.map((product) => [key(product), product])).values()
        );

        uniqueProducts.sort((a, b) => {
            if (typeof a[productKey] === "string") {
                return (a[productKey] as string).localeCompare(
                    b[productKey] as string
                );
            }

            if (typeof a[productKey] === "number") {
                return a.year - b.year;
            }
            return 1;
        });

        return uniqueProducts;
    };

    const handleSort = () => {
        const sortedProducts = products.toSorted((a, b) =>
            a.manufacturer.localeCompare(b.manufacturer)
        );
        setSorted(sortedProducts);
        setFiltered([]);
    };

    const handleFilter = (filterProperty: string | number) => {
        // Check if the value is present in the object
        if (filterProperty === "") {
            return;
        }
        if (
            products.some((item) =>
                Object.values(item).includes(filterProperty)
            )
        ) {
            const filteredProducts = products.filter((item) =>
                Object.values(item).includes(filterProperty)
            );
            setFiltered(filteredProducts);
            setSorted([]);
        }
    };

    const handleFilterPropertyChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilterProperty(event.target.value as keyof Product);
    };

    let productsToRender = [];

    if (filtered.length !== 0 && sorted.length === 0) {
        productsToRender = filtered;
    } else productsToRender = sorted;

    return (
        <>
            <h3>The Products:</h3>
            {/* Render all products form the data base on page load */}
            <div className="products-container">
                {sorted.length === 0 && filtered.length === 0 && (
                    <div>
                        {products.map((product) => (
                            <div key={product.id}>
                                <strong>{product.manufacturer}</strong> -{" "}
                                {product.model} ({product.year})
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* conditionally render the sorted  products by clicking button: */}
            <button onClick={handleSort}>sort products a - z</button>
            {/* conditionally render the filtered products by clicking button: */}
            <button onClick={() => handleFilter(filterProperty)}>
                Filter by model:
            </button>
            <label>
                <select
                    value={filterProperty}
                    onChange={handleFilterPropertyChange}
                >
                    <option value="">-- Select Property --</option>
                    {uniqueModels.map((product) => (
                        <option key={product.id} value={product.model}>
                            {product.model}
                        </option>
                    ))}
                </select>
            </label>
            <button onClick={() => handleFilter(filterProperty)}>
                Filter by manufacturer
            </button>
            <label>
                <select
                    value={filterProperty}
                    onChange={handleFilterPropertyChange}
                >
                    <option value="">-- Select Property --</option>
                    {uniqueManufacturers.map((product) => (
                        <option key={product.id} value={product.manufacturer}>
                            {product.manufacturer}
                        </option>
                    ))}
                </select>
            </label>
            {/* //double tilde to transform property into Number */}
            <button onClick={() => handleFilter(~~filterProperty)}>
                Filter by Year of production
            </button>
            <label>
                <select
                    value={filterProperty}
                    onChange={handleFilterPropertyChange}
                >
                    <option value="">-- Select Property --</option>
                    {uniqueProductionYears.map((product) => (
                        <option key={product.id} value={product.year}>
                            {product.year}
                        </option>
                    ))}
                </select>
            </label>

            <div className="products-container">
                {productsToRender.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image-container">
                            <img
                                className="product-image"
                                src={`../../public/images/${product.model}.jpg`}
                                alt={`image of ${product.manufacturer} ${product.model}`}
                            />
                        </div>
                        <strong>{product.manufacturer}</strong>
                        <p>
                            {product.model} {product.year}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};
