import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../AppContext";
import { Page2 } from "./Page2";

export const Dashboard = () => {
  
  const [add, setadd] = useState({})
  const {register , handleSubmit} = useForm();

  const submitHandler = (data) => {
    console.log(data);
    setadd(data)
  };

  return (
    <div>
      <h1>Twitter</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="">UserName</label>
        <input  type="text" {...register("name")} /><br/>
        <label htmlFor="">Twitt</label>
        <input type="text"  {...register("twitt")} /><br></br>

        <input type="submit" className="btn btn-primary" value="Post" name="" id="" />
      </form>

      <AppContext.Provider value={{add}}>
          <Page2/>
      </AppContext.Provider>
    </div>
  );
};
