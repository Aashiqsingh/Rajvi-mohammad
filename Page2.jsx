import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import "../assets/css/header.css";
import { Page3 } from "./Page3";

export const Page2 = () => {

  const { add } = useContext(AppContext);
  

  console.log(add);
  return (
    <div >
      <h1  className="secondChild" onClick={() =>(add.twitt)}>
        {add.name}
        
      </h1>

    
      <Page3/>
   
    </div>
  );
};
