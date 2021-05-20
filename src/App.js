import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Footer from "./components/Footer/footer"
import './App.css';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/react-portfolio" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/projects" exact component={Project} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;