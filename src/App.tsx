import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {FirstMap} from "./map/FirstMap";

function App() {
    return (
        <div className="App">
            <Header title="My Header"/>
            <Body title="My Body"/>
            <Footer title="My Footer"/>
            <FirstMap/>
        </div>
    );
}

export default App;
