import React, {useState, useEffect} from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import styled from "styled-components";

const ComponentLogin = styled.div`
    height: 350px;
    background-color: #b3b7bb;  
    display: flex;
    align-items: center;
    justify-content: center;
`;

function AdminLogin(props) {
    const {state} = useLocation();
    const {from} = state || {from: {pathname: "/"}};
    const [redirectToRefBool, setRedirectToRefBool] = useState(false);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    function adminLogin() {
        fakeAuth.authenticate(() => {
            validPassword ?
                setRedirectToRefBool(true)
                : setRedirectToRefBool(false);

        });
    }

    // validPassword

    useEffect(() => {
        setValidPassword(/^admin$/.test(password));
    }, [password]);

    if (redirectToRefBool) {
        return <Redirect to={from}/>;
    }
    return (
        <ComponentLogin>
            <Form className="">
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    <Form.Text style={{color: "red"}}>
                        {(!validPassword && password.length > 0) && 'Invalid Password input "admin"'}
                    </Form.Text>
                </Form.Group>
                <Button variant='primary' type='button' onClick={adminLogin}>
                    inAdmin
                </Button>
            </Form>

        </ComponentLogin>
    );
}

export default AdminLogin;
/* A fake authentication function */
export const fakeAuth = {
    isAuthenticated: false,
    authenticate(func) {
        this.isAuthenticated = true;
        setTimeout(func, 100);
    }

};