import React, { useContext } from "react";
import { AppContext } from "../AppContext";

export const Page3 = () => {
  const { add } = useContext(AppContext);
  console.log("third component ...", add);
  return (
    <div >
      <h1 className="thirdChild">{add.twitt}</h1>
      
    </div>
  );
};
