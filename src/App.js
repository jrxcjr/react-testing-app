import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTest from "./components/BootstrapNavbar.js";
import MainTitle from "./components/MainTitle.js";

class App extends React.Component {
 render() {
  return (
   <div>
    <NavbarTest />
    <MainTitle />
   </div>
  );
 }
}

export default App;
