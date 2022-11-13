import Route from"react-router-dom"
import "./Home.css"
import { Link } from "react-router-dom"
 
function Login(){

const handelLogin=()=>{
    alert("Login Succesfull!")
}


    return(
        <div>
        
   <div className="FORM"> 
   
    <p>Login</p>
    <input  placeholder="Email"/>
    <input  placeholder="Name"/>
    <input placeholder="mobile numer"/>
    <Link to="/">
      <button onClick={handelLogin} className="LogBTN">Login</button>
      </Link>
    
 <p style={{color:"blue",fontSize:"15px",color:"black",textDecoration:"underLine"}} >If you Have already account ??? 
 <Link to="login"> SignUp </Link></p>

   </div>
    </div>
    )
} 

export default Login