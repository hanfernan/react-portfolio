import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
    return(
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route path="/projects" component={Project} />
                    <Route exact path="/contact" component={Contact} />
                </Wrapper>
                <Footer />
            </div>
        </Router>
    )
}

export default App;