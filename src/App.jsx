import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./assets/layout/Layout";
import Expense from "./assets/pages/Expense";
import Income from "./assets/pages/Income";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Income />
                        </Layout>
                    }
                />
                <Route
                    path="/expenses"
                    element={
                        <Layout>
                            <Expense />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
