import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clarifai from "clarifai";
import Navigation from "./components/navigation/navigation.component.jsx";
import Logo from "./components/Logo/logo.component.jsx";
import Rank from "./components/Rank/rank.component.jsx";
import ImageLink from "./components/ImageLink/imageLink.component";
import FaceRecognition from "./components/FaceRecognition/faceRecognition.component";
import ParticlesBackground from "./components/ParticlesBackground/particlesbackground.component";
import SignIn from "./components/signIn/signIn";
import Register from "./components/Register/register.component.jsx";

function App() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageurl] = useState("");
    const [box, setBox] = useState({});
    const [route, setRoute] = useState("signIn");
    const [isSignedIn, setIsSignedIn] = useState(false);

    const calculateFaceLocation = (data) => {
        const clarifaiFace = data;
        const image = document.getElementById("inputImage");
        const width = Number(image.width);
        const height = Number(image.height);
        console.log(width, height);
        console.log(clarifaiFace);
    };

    const USER_ID = "xzivx77fzo6q";
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = "4e4265c90f674897922a1b731bc72afc";
    const APP_ID = "9e2eeb383fbe4519bc92ce655d47b689";
    const MODEL_ID = "e15d0f873e66047e579f90cf82c9882z";
    //   const MODEL_VERSION_ID = "YOUR_MODEL_VERSION_ID";
    // Change this to whatever image URL you want to process
    // https://samples.clarifai.com/metro-north.jpg
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onButtonSubmit = () => {
        setImageurl(input);
        const raw = JSON.stringify({
            user_app_id: {
                user_id: USER_ID,
                app_id: APP_ID,
            },
            inputs: [{
                data: {
                    image: {
                        url: input,
                    },
                },
            }, ],
        });

        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: "Key " + PAT,
            },
            body: raw,
        };

        // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
        // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
        // this will default to the latest version_id

        fetch(
                "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
                requestOptions
            )
            .then((response) => response)
            .then((result) => calculateFaceLocation(result))
            .catch((error) => console.log("error he", error));
    };
    const onRouteChange = (route) => {
        if (route === "signout") {
            setIsSignedIn(false);
        } else if (route == "home") {
            setIsSignedIn(true);
        }
        setRoute(route);
    };
    return ( <
        div className = "App" >
        <
        ParticlesBackground / >
        <
        Navigation isSignedIn = { isSignedIn }
        onRouteChange = { onRouteChange }
        /> {
            route === "home" ? ( <
                div >
                <
                Logo / >
                <
                Rank / >
                <
                ImageLink onInputChange = { onInputChange }
                onButtonSubmit = { onButtonSubmit }
                /> <
                FaceRecognition imageUrl = { imageUrl }
                /> <
                /div>
            ) : route === "signIn" ? ( <
                SignIn onRouteChange = { onRouteChange }
                />
            ) : ( <
                Register onRouteChange = { onRouteChange }
                />
            )
        } <
        /div>
    );
}

export default App;