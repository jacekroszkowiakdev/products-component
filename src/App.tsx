import "./App.css";
import React, { useEffect } from "react";
import { Products } from "./components/Products.component";
import { Home } from "./components/Home.component";
import data from "./db/db.json";

const App: React.FC = () => {
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

    return (
        <>
            <div>
                <h2>Click the button to see the products</h2>
                <button>to the products page</button>
                <Home />
                <Products />
            </div>
        </>
    );
};

export default App;
