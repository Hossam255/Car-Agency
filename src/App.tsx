import "../src/styles/globals.scss";
import React from "react";
import logo from "./logo.svg";
import Input from "./component/input";
import Header from "./layout/header";
import Sidemenu from "./layout/sidemenu";
import MainCard from "./component/MainCard";
import CardImage from "./component/cardImage";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidemenu />
      {/* <CardImage
        img={"/assets/cars/car-audi-a3-audi-a4-car.svg"}
        cost="$400/d"
        intro="focus"
        title="Porshe 718 Cayman S"
        date="4 manual"
      /> */}
    </div>
  );
}

export default App;
