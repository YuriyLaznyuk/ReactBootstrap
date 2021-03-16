import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap";
import NaviBar from "./components/NaviBar";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About";
import Users from "./components/pages/Users";
import Footer from "./components/Footer";
import Admin from "./components/pages/Admin";
import PrivateRoute from "./components/pages/redirectComponent/PrivateRoute";
import AdminLogin from "./components/pages/redirectComponent/AdminLogin";


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
                    <Route path="/adminLogin"><AdminLogin/></Route>
                    <PrivateRoute patch="/admin" component={Admin}/>
                </Switch>

                <Footer/>

            </BrowserRouter>
        </div>

    );
}

export default App;