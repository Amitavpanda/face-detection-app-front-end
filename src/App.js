import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation.component.jsx';
import Logo from './components/Logo/logo.component.jsx';
import Rank from './components/Rank/rank.component.jsx';
import ImageLink from './components/ImageLink/imageLink.component';
import ParticlesBackground from './components/ParticlesBackground/particlesbackground.component';

function App() {
    return ( <
        div className = "App" >
        <
        ParticlesBackground / >
        <
        Navigation / >
        <
        Logo / >
        <
        Rank / >
        <
        ImageLink / > { /*<FaceRecognition /> */ } <
        /div>
    );
}

export default App;