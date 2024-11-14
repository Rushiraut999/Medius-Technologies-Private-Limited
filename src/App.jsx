import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./component/Navbar"
import Main from "./component/main";
function App() {
  return (
    <>
    <div className="all">
  
    <Navbar></Navbar>
    <Main></Main>
    

    </div>
    </>
  );
}

export default App;
