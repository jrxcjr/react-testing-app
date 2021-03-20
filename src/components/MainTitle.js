import React from "react";
import Container from "react-bootstrap/container";
import Jumbotron from "react-bootstrap/jumbotron";

class MainTitle extends React.Component {
 render() {
  return (
   <React.Fragment>
    <div>
     <Jumbotron fluid>
      <Container>
       <h1>Fluid jumbotron</h1>
       <p>
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
       </p>
      </Container>
     </Jumbotron>
    </div>
   </React.Fragment>
  );
 }
}

export default MainTitle;
