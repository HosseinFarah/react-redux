import { useContext, useState } from "react";
import { siteName } from "../App";
import { useQuery } from "react-query";
import Axios from "axios";
import { useCounter } from "../Hooks/useCounter";
import { useSelector } from "react-redux";
export const Home = () => {
  const {state,setState,reset, inc,dec} = useCounter();
  const selectore = useSelector((state)=>state.myForm)
  const [show,setShow] = useState(true);
  const { name } = useContext(siteName);
  const { data } = useQuery(["name"], async () => {
    const res = await Axios.get("https://catfact.ninja/fact");
    return res.data;
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <ul className="mt-5">
            <li>react-redux</li>
            <li>@reduxjs/toolkit</li>
            <li>createSlice</li>
            <li>configureStore</li>
            <li>customHook</li>
            <li>useContext</li>
            <li>asynt await Axios</li>
            <li>useQuery</li>
            <li>navLink</li>
          </ul>
          <div className="alert alert-primary col-5" role="alert">
            Main Page .<h5>setName: {name}</h5>
          </div>
          <div className="alert alert-primary col-6 mx-1">
            {show && <h5>{data?.fact}</h5>}
            <button onClick={()=>{setShow(!show)}}>{show?"Hide":"Show"}</button>
            <h5>{state}</h5>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={reset}>C</button>
          </div>
          <div className="row">
            <div className="col-6">
            <h5>After completing the form, get the data from the Redux page! </h5>
            <ul>
          <li>Subject:{selectore.subject}</li>
          <li>Product:{selectore.product}</li>
          <li>Price:{selectore.price}</li>
          <li>Category:{selectore.category}</li>
          <li>Tags:{selectore.tags}</li>
          <li>Counter:{selectore.counter}</li>
          </ul>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
