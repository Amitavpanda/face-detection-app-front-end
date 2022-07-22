import React from "react";
import "./signIn.styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const SignIn = ({ onRouteChange }) => {
    return ( <
        div className = "row justify-content-center" >
        <
        Form className = "form-container" >
        <
        h1 > signIn < /h1> <
        Form.Group className = "mb-3"
        controlId = "formBasicEmail" >
        <
        Form.Label > Email address < /Form.Label> <
        Form.Control type = "email"
        placeholder = "Enter email" / >
        <
        /Form.Group>

        <
        Form.Group className = "mb-3"
        controlId = "formBasicPassword" >
        <
        Form.Label > Password < /Form.Label> <
        Form.Control type = "password"
        placeholder = "Password" / >
        <
        /Form.Group>

        <
        Button onClick = {
            () => onRouteChange("home") }
        variant = "primary"
        className = "btn btn-block"
        type = "submit" >
        SignIn <
        /Button> <
        Button onClick = {
            () => onRouteChange("register") }
        variant = "primary"
        className = "btn btn-block"
        type = "submit" >
        Register <
        /Button> <
        /Form> <
        /div>
    );
};

export default SignIn;