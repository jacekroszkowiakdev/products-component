import "./App.css";
import { useState } from "react";
import { Products } from "./components/Products.component";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h2>Click the button to see the products</h2>
                <button>to the products page</button>
                <Products />
            </div>
        </>
    );
}

export default App;
