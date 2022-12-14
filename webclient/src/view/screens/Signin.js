import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from "react-router-dom";
const userController = require("../../controller/user.controller");
const userSession = require("../../controller/session.controller");

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const  redirection = () =>{
        navigate('/')
    }

    return (
        <div className='Body'>
            <div className="formDiv">
                <h1 className="pageHeader">Login</h1>
                <div className="spaceVertical"></div>
                <div className="imageHeader">
                    <img alt="scooter" src="/assets/scooter.png" height={250} />
                </div>
                <Form onSubmit={async (event) => {
                    event.preventDefault();
                    let answer = await userController.login(email, password);

                    if (answer === "failed") {
                        console.log("Failed!");
                    } else {
                        userSession.removeSession();
                        console.log(answer);
                        userSession.setSession(answer.name);
                        redirection();
                        window.location.reload(false);
                    }
                }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => {setEmail(event.target.value)}} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Show password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className="spaceVertical"></div>
                <div className="spaceVertical"></div>
                <div className="spaceVertical"></div>
                <h6 className="textHeader">Don't have an account yet?<Link to="/signup"> Sign up</Link></h6>
            </div>
        </div>
    );
}

export default Login;