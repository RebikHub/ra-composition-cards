import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import CardBody from "./components/CardBody";
import Card from "./components/Card";
import CardImage from "./components/CardImage";

function App() {
  return (
    <Card>
      <CardImage/>
      <CardBody/>
    </Card>
  );
}

export default App;
