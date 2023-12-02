import "./App.css";
import React, { useEffect } from "react";
import { Products } from "./components/Products.component";
import { Home } from "./components/Home.component";
import data from "./db/db.json";
import { Product } from "./model/model";

const App: React.FC = () => {
    // const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to post data");
                }
                return response.json();
            })
            .then((json) => console.log("data posted:", json))
            .catch((error) => console.error("Error posting data:", error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((json) => console.log("data fetched:", json))
            .catch((error) => console.error("Error fetching data:", error));
    });

    return (
        <>
            <div>
                <h2>Click the button to see the products</h2>
                <button>to the products page</button>
                <Products />
                <Home />
            </div>
        </>
    );
};

export default App;
