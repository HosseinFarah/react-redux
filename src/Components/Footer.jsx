import { useContext, useState } from "react";
import { siteName } from "../App";
export const Footer = () => {
const {name,setName} = useContext(siteName);
const [username,setUsername]= useState("");
const updatename = ()=>{
  setName(username);
  document.querySelector("input").value = "";
}
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
          <button onClick={updatename}>Set Your Name</button>
          <h5>Your Name:{name}</h5>
          </div>
          <div className="col-md-4">
            <h5>Contact Me</h5>
            <address>
            Finland
              <br />
              TAMPERE
              <br />
              Email: h.farah61@gmail.com
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};
