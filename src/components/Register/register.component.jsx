import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const register = ({ onRouteChange }) => {
    return ( <
        div className = "row justify-content-center" >
        <
        Form className = "form-container" >
        <
        h1 > Register < /h1> <
        Form.Group className = "mb-3"
        controlId = "formBasicEmail" >
        <
        Form.Label > Name < /Form.Label> <
        Form.Control type = "name"
        placeholder = "Enter Name" / >
        <
        /Form.Group> <
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
        /Form.Group> <
        Button onClick = {
            () => onRouteChange("signIn") }
        variant = "primary"
        type = "submit" >
        Register <
        /Button> <
        /Form> <
        /div>
    );
};

export default register;