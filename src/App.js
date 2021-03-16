import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap";
import NaviBar from "./components/NaviBar";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About";
import Users from "./components/pages/Users";
import Footer from "./components/Footer";


function App(props) {
    return (
        <div>
            <h1 className="text-center">Hello React Bootstrap</h1>
            <BrowserRouter>
                <NaviBar/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/about"><About/></Route>
                    <Route path="/users"><Users/></Route>
                </Switch>

                <Footer/>

            </BrowserRouter>
        </div>

    );
}

export default App;