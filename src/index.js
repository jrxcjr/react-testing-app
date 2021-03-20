import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTest from './components/BootstrapNavbar.js';
import MainTitle from './components/MainTitle.js';

const components = [
    <NavbarTest/>,<MainTitle/>
    
]

ReactDOM.render(components, document.getElementById("root"));
