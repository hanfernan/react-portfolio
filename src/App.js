import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact />
                </Switch>
            </Router>
        </>
    )
}

export default App;