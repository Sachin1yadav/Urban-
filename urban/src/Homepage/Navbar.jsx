import "./Home.css"
import {Routes,Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login"
function Navbar(){

    const hendelLogin=()=>{
         
          
    }

    return(
        <div>
            
            <div className="Navbar"> 
            
<div className="navbarLogo">
     <Link  to="/">
     <img  src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"/> 
     </Link>
 
</div>
<div className="navbarRouter">
    <div className="navbarRouter1">
        <div>
            <Link to="/services">
            <p>Blog</p>
            </Link>
        </div>
        <div>
            <Link to="/services" >
            <p  className="reg">Register As A Professional</p>
            </Link>
        </div>
        <div>
          
        <Link to="login"> <p>Login</p></Link>
           
         
            
             
        </div>
        <div>
            <Link to="sing">
            <p className="sign">/SignUp</p>
            </Link>
        </div>
    </div>
</div>

            </div>
        </div>
    )
}
export default Navbar 